import { GarageType } from "@/components/dialogs/garare-picker-dialog";
import { GraphQLAPI } from "@/graphql/api";
import { Garage, MutationCreateOneServiceLogArgs, ServiceLog, ServiceLogDto, ServiceLogType, UserVehicle } from "@/graphql/gql/generated-models";
import { CreateOneServiceLogMutation } from "@/graphql/gql/mutations/createOneServiceLog";
import { GraphQLResponse } from "@/graphql/types/graphql-response";
import { GoogleApi } from "@/lib/google-api";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface AddServiceLogInput {
    vehicle: UserVehicle;
    date: string;
    mileage: string;
    type: string;
    media?: string[] | undefined;
    garage?: {
        type: GarageType;
        data?: any;
    } | undefined;
    bills?: string[] | undefined;
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

export const addServiceLog = createAsyncThunk<GraphQLResponse<ServiceLog>, AddServiceLogInput>(
    'service-log/addServiceLog',
    async (values, thunkApi) => {
        try {
            const { vehicle } = values

            let serviceLogInput: ServiceLogDto = {
              date: values.date,
              type: values.type as ServiceLogType,
              mileage: parseInt(values.mileage),
              vehicle: vehicle!.id
            }
            serviceLogInput = await appendGarageDTO(serviceLogInput, values)
            const res = await GraphQLAPI.authQuery<ServiceLog, MutationCreateOneServiceLogArgs>(CreateOneServiceLogMutation, {
                input: {
                    serviceLog: serviceLogInput
                }
            })
            return res
        } catch (err: any) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)