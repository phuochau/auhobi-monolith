import {AddressType, Client, GeocodeResult, Language, PlaceAutocompleteResult, PlaceAutocompleteType} from "@googlemaps/google-maps-services-js";
import {
    ConfigureParams,
    GoogleSignin,
    SignInResponse
  } from '@react-native-google-signin/google-signin';
import axios from "axios";

export namespace GoogleApi {
    const axiosInstance = axios.create({
        url: 'https://maps.googleapis.com/maps/api'
    })
    const client = new Client({ axiosInstance });
    const apiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY!;

    // car-repair
    export const searchGarages = async (
        keyword: string,
        minLength = 2,
        language = Language.vi
    ): Promise<PlaceAutocompleteResult[]> => {
        if (keyword.length >= minLength) {
            return client.placeAutocomplete({
                params: {
                    input: keyword,
                    key: apiKey,
                    types: 'car_repair' as PlaceAutocompleteType,
                    language,
                    components: ['country:vn'],
                }
            }).then(res => res?.data?.predictions || [])
        }

        return Promise.resolve([])
    }

    export const fetchGeolocation = async (placeId: string): Promise<GeocodeResult | undefined> => {
        return client.geocode({
            params: {
                place_id: placeId,
                key: apiKey,
            }
        }).then(res => res.data?.results?.[0])
    }

    export const getAddressFromGeoLocation = (geo: GeocodeResult) => {
        if (geo?.address_components?.length) {
            const streetNumber = geo.address_components.find(item => item.types.includes(AddressType.street_number))?.long_name
            const streetAddress = geo.address_components.find(item => item.types.includes(AddressType.street_address))?.long_name
            const route = geo.address_components.find(item => item.types.includes(AddressType.route))?.long_name
            const neighborhood = geo.address_components.find(item => item.types.includes(AddressType.neighborhood))?.long_name
            const ward = geo.address_components.find(item => item.types.includes(AddressType.sublocality))?.long_name
            const district = geo.address_components.find(item => item.types.includes(AddressType.administrative_area_level_2))?.long_name
            const city = geo.address_components.find(item => item.types.includes(AddressType.administrative_area_level_1))?.long_name
            const country = geo.address_components.find(item => item.types.includes(AddressType.country))?.long_name
            const postalCode = geo.address_components.find(item => item.types.includes(AddressType.postal_code))?.long_name

            return {
                streetNumber,
                streetAddress,
                route,
                neighborhood,
                ward,
                district,
                city,
                country,
                postalCode
            }
        }
        return null
    }

    export const initSignInSDK = (options?: ConfigureParams): void => {
        GoogleSignin.configure({
            ...(options || {}),
            iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID
        });
    }

    export const googleSignIn = async (): Promise<SignInResponse> => {
        await GoogleSignin.hasPlayServices();
        return GoogleSignin.signIn();
    }
}