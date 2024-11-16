import { cn } from "@/lib/utils";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Pickers } from "@/lib/pickers";
import { Plus } from "@/lib/icons/Plus";
import { BlurView } from 'expo-blur';
import _ from "lodash";
import { X } from '@/lib/icons/X'

/**
 * ImageDisplay
 */
export type ImageDisplayProps = React.ComponentPropsWithoutRef<typeof Image> & {
    containerClassName?: string,
    onRequestRemove?: () => any
}


const ImageDisplay = React.forwardRef<
    React.ElementRef<typeof Image>,
    ImageDisplayProps
>(({ className, containerClassName, source, onRequestRemove, ...props }, ref) => {
    return (
        <View className={cn("relative", containerClassName)}>
            <View className="relative rounded-xl overflow-hidden">
                <Image
                    ref={ref}
                    source={source}
                    className={cn("w-full h-full rounded-xl", className)}
                    resizeMode="cover"
                    {...props}
                />
                <TouchableOpacity onPress={onRequestRemove} className="absolute top-0 right-0">
                    <BlurView intensity={80} tint="dark" className="p-0.5">
                        <X size={20} className="text-background" />
                    </BlurView>
                </TouchableOpacity>
            </View>
        </View>
    )
});
ImageDisplay.displayName = 'ImageDisplay';

/**
 * MediaInput
 */

type MediaInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    addText?: string,
    value?: string[],
    onChange?: (value: string[]) => any,
    imageContainerClassName?: string,
    onBlur?: () => any
}

const MediaInput = React.forwardRef<
    React.ElementRef<typeof View>,
    MediaInputProps
>(({
    addText = 'Add',
    value,
    onChange,
    onBlur,
    imageContainerClassName,
    ...props
}, ref) => {
    const images = value || []

    async function onAddImages() {
        const assets = await Pickers.showImagePicker({ allowsMultipleSelection: true })
        if (assets.length) {
            const newValues = [...images, ...assets.map(item => item.uri)]
            if (onChange) {
                onChange(newValues)
            }
            if (onBlur) {
                onBlur()
            }
        }
    }

    function onRemoveImage(index: number): void {
        if (onChange) {
            _.pullAt(images, index)
            onChange(images)
        }
    }

    return (
        <View
            ref={ref}
            {...props}
        >
            <Button onPress={onAddImages} variant={'secondary'} className="flex flex-row items-center justify-center gap-2">
                <Text>{addText}</Text>
                <Plus className="text-secondary-foreground" width={16}></Plus>
            </Button>
            <View className={cn('flex flex-row flex-wrap mt-4 -mx-1', imageContainerClassName)}>
                {images.map((uri, index) =>
                    <ImageDisplay 
                        key={`${index}-${uri}`}
                        source={{ uri }}
                        containerClassName="w-1/4 aspect-square p-1"
                        onRequestRemove={() => onRemoveImage(index)}
                    />
                )}
            </View>
        </View>
    )
});
MediaInput.displayName = 'MediaInput';

export { ImageDisplay, MediaInput }