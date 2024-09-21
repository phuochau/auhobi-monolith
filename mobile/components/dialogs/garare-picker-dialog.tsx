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

export type GaragePickerDialogProps = {
    open?: boolean,
    onRequestClose?: () => any,
    onChange?: (garage: any) => any
}

const GaragePickerDialog = (props: GaragePickerDialogProps) => {
  const { open, onRequestClose, onChange } = props
  const insets = useSafeAreaInsets();
  const [keyword, setKeyword] = useState<string>('')
  const [places, setPlaces] = useState<PlaceAutocompleteResult[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  if (!open) {
    return null
  }

  function chooseGarage(garage: any) {
    if (onRequestClose) {
        onRequestClose()
    }
    if (onChange) {
        onChange(garage)
    }
  }

  function updateKeyword(text: string) {
    setKeyword(text)
    startSearch(text)
  }

  function startSearch(text: string) {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(async () => {
        try {
            const predictions = await GoogleApi.searchGarages(text)
            console.log(JSON.stringify(predictions))
            if (predictions) {
                setPlaces(predictions)
            }
        } catch (err) {
            console.log(err)
            setPlaces([])
        }
    }, 1000)
  }

  return (
    <Portal name='garage-input-model'>
        <View className='absolute top-0 left-0 bottom-0 right-0 bg-background flex flex-col' style={{ paddingTop: insets.top }}>
            <View className='px-4 py-4'>
                <Input value={keyword} onChangeText={updateKeyword} />
            </View>
            <Separator />
            
            <ScrollView>
                <View className='flex flex-col'>
                    {places.map((place, index) =>
                        <Pressable key={`${place.place_id}${index}`} onPress={() => chooseGarage(true)}>
                            <View className='flex flex-row px-4 py-2.5 gap-4'>
                                <Image source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipPxIOaHYtWnE0nfQ6DM75PVVpAt2uXP8y6-gvKO=w408-h544-k-no' }} className='mt-1.5 aspect-square w-12 h-12 rounded' />
                                <View className='flex-1 flex flex-col'>
                                    <Label nativeID="GarageName">{place.structured_formatting?.main_text || place.description}</Label>
                                    <Text className='text-sm text-muted-foreground'>{place.description}</Text>
                                </View>
                                <View className='mt-0.5'>
                                    <Text className='text-sm text-muted-foreground'>10.3km</Text>
                                </View>
                            </View>
                            <Separator />
                        </Pressable>)}
                </View>
            </ScrollView>

            <View className='px-4' style={{ paddingVertical: insets.bottom }}>
                <Button onPress={onRequestClose}>
                    <Text>Close</Text>
                </Button>
            </View>
        </View>
    </Portal>
  );
}

export { GaragePickerDialog }