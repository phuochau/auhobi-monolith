import { GarageType } from "@/components/dialogs/garare-picker-dialog";
import { GraphQLAPI } from "@/graphql/api";
import { Garage, MutationCreateOneServiceLogArgs, ServiceLog, ServiceLogBillDto, ServiceLogDto, ServiceLogType, UserVehicle } from "@/graphql/gql/generated-models";
import { CreateOneServiceLogMutation } from "@/graphql/gql/mutations/createOneServiceLog";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { FileUtils } from "@/lib/file-utils";
import { GoogleApi } from "@/lib/google-api";
import { UrlUtils } from "@/lib/url-utils";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface AddServiceLogInput {
    vehicle: UserVehicle;
    date: string;
    mileage?: string;
    description?: string;
    type: string;
    links?: string[];
    media?: string[] | undefined;
    garage?: {
        type: GarageType;
        data?: any;
    } | undefined;
    bills?: {
      total: number;
      media: string;
    }[]
}

async function appendGarageDTO(serviceLogInput: ServiceLogDto, values: AddServiceLogInput): Promise<ServiceLogDto> {
  if (values.garage) {
    if (values.garage.type === GarageType.CUSTOM) {
      serviceLogInput.customGarage = values.garage.data as string
    } else if (values.garage.type === GarageType.GOOGLE_MAPS) {
      const place = values.garage.data as PlaceAutocompleteResult
      try {
        const geoLocation = await GoogleApi.fetchGeolocation(place.place_id)
        serviceLogInput.garage = {
          name: place.structured_formatting?.main_text || place.place_id,
          gplace_id: place.place_id,
          addressFull: place.description
        }
        if (geoLocation) {
          serviceLogInput.garage = {
            ...serviceLogInput.garage,
            lat: geoLocation.geometry?.location?.lat,
            lng: geoLocation.geometry?.location?.lng,
            addressFull: geoLocation.formatted_address
          }
          const address = GoogleApi.getAddressFromGeoLocation(geoLocation)

          if (address) {
            serviceLogInput.garage = {
              ...serviceLogInput.garage,
              addressStreetAndNo: `${address.streetNumber || address.streetAddress} ${address.route || ''} ${address.neighborhood || ''}`.trim(),
              addressWard: address.ward,
              addressDistrict: address.district,
              addressCity: address.city,
              addressCoutry: address.country,
              addressPostalCode: address.postalCode
            }
          }
        }
      } catch (err) {

      }
    } else {
      const garage = values.garage.data as Garage
      serviceLogInput.garageId = garage.id
    }
  }

  return serviceLogInput
}

async function appendBillDTOs (serviceLogInput: ServiceLogDto, values: AddServiceLogInput): Promise<ServiceLogDto> {
  if (values?.bills?.length) {
    const billDTOs: ServiceLogBillDto[] = []
    for (const input of values.bills) {
      
      let media: string | undefined = undefined;
      if (input.media) {
        if (UrlUtils.isOnlineUrl(input.media)) {
          media = input.media
        } else {
          media = await GraphQLAPI.uploadMedia(FileUtils.getFileName(input.media), input.media, FileUtils.getMimeType(input.media)).then(f => f.url)
        }
      }

      billDTOs.push({
        media,
        total: input.total
      })
    }
    serviceLogInput.bills = billDTOs
  }

  return serviceLogInput
}

export const addServiceLog = createAsyncThunk<GraphQLResponse<ServiceLog>, AddServiceLogInput>(
    'service-log/addServiceLog',
    async (values, thunkApi) => {
        try {
            const { vehicle } = values

            let media: string[] = []
            if (values.media?.length) {
              media = await Promise.all(
                values.media.map(async (filePath: string) => {
                  if (UrlUtils.isOnlineUrl(filePath)) {
                    return Promise.resolve(filePath)
                  }
                  const f = await GraphQLAPI.uploadMedia(FileUtils.getFileName(filePath), filePath, FileUtils.getMimeType(filePath));
                  return f.url;
                })
              )
            }

            let serviceLogInput: ServiceLogDto = {
              date: values.date,
              type: values.type as ServiceLogType,
              description: values.description,
              mileage: values.mileage?.length ? parseInt(values.mileage) : undefined,
              vehicle: vehicle!.id,
              media,
              links: values.links
            }

            serviceLogInput = await appendGarageDTO(serviceLogInput, values)
            serviceLogInput = await appendBillDTOs(serviceLogInput, values)

            console.log(JSON.stringify(serviceLogInput))

            const res = await GraphQLAPI.authQuery<ServiceLog, MutationCreateOneServiceLogArgs>(CreateOneServiceLogMutation, {
                input: {
                    serviceLog: serviceLogInput
                }
            })
            return res
        } catch (err: any) {
            console.log(err)
            return thunkApi.rejectWithValue(err.message)
        }
    }
)