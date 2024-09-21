import {Client, Language, LatLng, PlaceAutocompleteResult, PlaceAutocompleteType} from "@googlemaps/google-maps-services-js";
import axios from "axios";

export namespace GoogleApi {
    const axiosInstance = axios.create({
        url: 'https://maps.googleapis.com/maps/api'
    })
    const client = new Client({ axiosInstance });

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
                    key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY!,
                    types: 'car_repair' as PlaceAutocompleteType,
                    language,
                    components: ['country:vn'],
                }
            }).then(res => res?.data?.predictions || [])
        }

        return Promise.resolve([])
    }
}