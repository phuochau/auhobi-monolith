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
type ImageDisplayProps = React.ComponentPropsWithoutRef<typeof View> & {
    uri: string,
    imageClassName?: string
}

const ImageDisplay =  React.forwardRef<
    React.ElementRef<typeof View>,
    ImageDisplayProps
>(({ className, imageClassName, uri, ...props }, ref) => (
    <View
        ref={ref}
        className={cn('h-full w-full', className)}
        {...props}
    >
        <Image source={{ uri }} className={cn("aspect-auto w-full h-full object-cover", imageClassName)} />
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
    className,
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
            className={cn('', className)}
            {...props}
        >
            <Button onPress={onAddImages} variant={'secondary'} className="flex flex-row items-center justify-center gap-2">
                <Text>{addText}</Text>
                <Plus className="text-secondary-foreground" width={16}></Plus>
            </Button>
            <View className={cn('grid grid-cols-4 gap-2', imageContainerClassName)}>
                {images.map((uri, index) => <ImageDisplay key={`${index}-${uri}`} uri={uri} />)}
            </View>
        </View>
    )
});
MediaInput.displayName = 'MediaInput';

export { ImageDisplay, MediaInput }