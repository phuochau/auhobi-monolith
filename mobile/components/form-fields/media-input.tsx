import { cn } from "@/lib/utils";
import React from "react";
import { Image, View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Pickers } from "@/lib/pickers";
import { Plus } from "@/lib/icons/Plus";

/**
 * ImageDisplay
 */
export type ImageDisplayProps = React.ComponentPropsWithoutRef<typeof Image> & {
    containerClassName?: string
}


const ImageDisplay =  React.forwardRef<
    React.ElementRef<typeof Image>,
    ImageDisplayProps
>(({ className, containerClassName, source, ...props }, ref) => (
    <View className={cn("relative", containerClassName)}>
        <Image
            ref={ref}
            source={source}
            className={cn("", className)}
            resizeMode="cover"
            {...props}
        />
    </View>
));
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

const MediaInput =  React.forwardRef<
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

    return (
        <View
            ref={ref}
            {...props}
        >
            <Button onPress={onAddImages} variant={'secondary'} className="flex flex-row items-center justify-center gap-2">
                <Text>{addText}</Text>
                <Plus className="text-secondary-foreground" width={16}></Plus>
            </Button>
            <View className={cn('flex flex-row flex-wrap gap-2 mt-4', imageContainerClassName)}>
                {images.map((uri, index) => <ImageDisplay key={`${index}-${uri}`} source={{ uri }} className="w-16 h-16" />)}
            </View>
        </View>
    )
});
MediaInput.displayName = 'MediaInput';

export { ImageDisplay, MediaInput }