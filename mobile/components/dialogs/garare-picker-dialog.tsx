'use client'

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Image, Pressable, ScrollView } from 'react-native';
import { Input } from '../ui/input';
import { Portal } from '@rn-primitives/portal';
import { Separator } from '../ui/separator';
import { Label } from '../ui/label';
import { Text } from '../ui/text';
import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import { GoogleApi } from '@/lib/google-api';
import { PlaceAutocompleteResult } from '@googlemaps/google-maps-services-js';
import { GraphQLAPI } from '@/graphql/api';
import { Garage, GarageConnection, GarageSortFields, QueryGaragesArgs, SortDirection } from '@/graphql/gql/generated-models';
import { GaragesQuery } from '@/graphql/gql/queries/garages';
import { TriangleAlert } from '@/lib/icons/TriangleAlert';
import React from 'react';

export enum GarageType {
    DEFAULT = 1,
    GOOGLE_MAPS,
    CUSTOM,
}

export interface GaragePickerResult {
    type: GarageType,
    data: Garage | PlaceAutocompleteResult | string
}

export type GaragePickerDialogProps = {
    open?: boolean,
    onRequestClose?: () => any,
    onChange?: (result: GaragePickerResult) => any
}

const GaragePickerDialog = (props: GaragePickerDialogProps) => {
  const { open, onRequestClose, onChange } = props
  const insets = useSafeAreaInsets();
  const [keyword, setKeyword] = useState<string>('')
  const [searching, setSearching] = useState<boolean>(false)
  const [garages, setGarages] = useState<Garage[]>([])
  const [gPlaces, setGPlaces] = useState<PlaceAutocompleteResult[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  if (!open) {
    return null
  }

  async function fetchGarages(text: string): Promise<Garage[]> {
    try {
        const result = await GraphQLAPI.authQuery<GarageConnection, QueryGaragesArgs>(GaragesQuery, {
            paging: { first: 5 },
            filter: {
                name: { iLike: `%${text}%` }
            },
            sorting: [{ field: GarageSortFields.Name, direction: SortDirection.Asc }]
        })

        return (result.data?.edges || []).map(item => item.node)
    } catch (err) {
        console.log(err)
        return []
    }
  }


  async function fetchGaragesOnGoogleMaps(text: string): Promise<PlaceAutocompleteResult[]> {
    try {
        const gPredictions = await GoogleApi.searchGarages(text)
        return gPredictions
    } catch (err) {
        console.log(err)
        return []
    }
  }

  function chooseGarage(type: GarageType, data: any) {
    if (onRequestClose) {
        onRequestClose()
    }
    if (onChange) {
        onChange({ type, data })
        setKeyword('')
    }
  }

  function updateKeyword(text: string) {
    setSearching(true)
    setKeyword(text)
    startSearch(text)
  }

  function startSearch(text: string) {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(async () => {
        const garages = await fetchGarages(text)
        const garagePlaceIds = garages.map(item => item.gplace_id)
        const gPlaces = await fetchGaragesOnGoogleMaps(text)

        setGarages(garages)
        setGPlaces(gPlaces.filter(item => !garagePlaceIds.includes(item.place_id)))
        setSearching(false)
    }, 1000)
  }

  const emptyResult = !Boolean(garages.length) && !Boolean(gPlaces.length)

  return (
    <Portal name='garage-input-model'>
        <View className='absolute top-0 left-0 bottom-0 right-0 bg-background flex flex-col' style={{ paddingTop: insets.top }}>
            <View className='px-5 py-4'>
                <Input value={keyword} onChangeText={updateKeyword} placeholder='Search Garage' />
            </View>
            <Separator />
            
            <ScrollView>
                {emptyResult && Boolean(keyword.length) && !searching &&
                    <View className="flex flex-col items-center justify-center px-5 gap-2 py-12">
                        <TriangleAlert className='text-muted-foreground' size={48} />
                        <Text className='text-sm font-semibold text-muted-foreground'>There is no results.</Text>
                        <Button onPress={() => chooseGarage(GarageType.CUSTOM, keyword)}><Text>Choose "{keyword}"</Text></Button>
                    </View>}

                {!emptyResult && 
                    <>
                        <View className='flex flex-col'>
                            {garages.map((garage, index) =>
                                <Pressable key={`${garage.id}${index}`} onPress={() => chooseGarage(GarageType.DEFAULT, garage)}>
                                    <View className='flex flex-row px-5 py-2.5 gap-4'>
                                        {Boolean(garage.logo) && <Image source={{ uri: garage.media?.[0] }} className='mt-1.5 aspect-square w-12 h-12 rounded' />}
                                        <View className='flex-1 flex flex-col'>
                                            <Label nativeID="GarageName">{garage.name}</Label>
                                            <Text className='text-sm text-muted-foreground'>{garage.addressFull}</Text>
                                        </View>
                                    </View>
                                    <Separator />
                                </Pressable>)}
                        </View>

                        <View className='flex flex-col'>
                            {gPlaces.map((place, index) =>
                                <Pressable key={`${place.place_id}${index}`} onPress={() => chooseGarage(GarageType.GOOGLE_MAPS, place)}>
                                    <View className='flex flex-row px-5 py-2.5 gap-4'>
                                        <View className='flex-1 flex flex-col'>
                                            <Label nativeID="GarageName">{place.structured_formatting?.main_text || place.description}</Label>
                                            <Text className='text-sm text-muted-foreground'>{place.description}</Text>
                                        </View>
                                    </View>
                                    <Separator />
                                </Pressable>)}
                        </View>
                    </>}
            </ScrollView>

            <View className='px-5' style={{ paddingBottom: insets.bottom + 16, paddingTop: 16 }}>
                <Button variant={'outline'} onPress={onRequestClose}>
                    <Text>Close</Text>
                </Button>
            </View>
        </View>
    </Portal>
  );
}

export { GaragePickerDialog }