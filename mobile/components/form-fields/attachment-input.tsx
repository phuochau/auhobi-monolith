import { cn } from "@/lib/utils";
import React from "react";
import { Image, View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Pickers } from "@/lib/pickers";
import { Plus } from "@/lib/icons/Plus";

/**
 * AttachmentImage
 */
type AttachmentImageProps = React.ComponentPropsWithoutRef<typeof View> & {
    uri: string,
    imageClassName?: string
}

const AttachmentImage =  React.forwardRef<
    React.ElementRef<typeof View>,
    AttachmentImageProps
>(({ className, imageClassName, uri, ...props }, ref) => (
    <View
        ref={ref}
        className={cn('h-full w-full', className)}
        {...props}
    >
        <Image source={{ uri }} className={cn("aspect-auto w-full h-full object-cover", imageClassName)} />
    </View>
));
AttachmentImage.displayName = 'AttachmentImage';

/**
 * AttachmentInput
 */

type AttachmentInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    addImagesText?: string,
    value?: string[],
    onChange?: (value: string[]) => any,
    imageContainerClassName?: string,
    onBlur?: () => any
}

const AttachmentInput =  React.forwardRef<
    React.ElementRef<typeof View>,
    AttachmentInputProps
>(({
    addImagesText = 'Add',
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
                <Text>{addImagesText}</Text>
                <Plus className="text-secondary-foreground" width={16}></Plus>
            </Button>
            <View className={cn('grid grid-cols-4 gap-2', imageContainerClassName)}>
                {images.map((uri, index) => <AttachmentImage key={`${index}-${uri}`} uri={uri} />)}
            </View>
        </View>
    )
});
AttachmentInput.displayName = 'AttachmentInput';

export { AttachmentImage, AttachmentInput }