import { cn } from "@/lib/utils";
import React from "react";
import { Image, View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Pickers } from "@/lib/pickers";
import { Plus } from "@/lib/icons/Plus";
import { Input } from "../ui/input";
import { ServiceLogBillDto } from "@/graphql/gql/generated-models";
import { Label } from "../ui/label";

/**
 * BillDisplay
 */
export type BillDisplayProps = React.ComponentPropsWithoutRef<typeof View> & {
    data: ServiceLogBillDto,
    imageClassName?: string,
    onChange: (change: ServiceLogBillDto) => any
}


const BillDisplay =  React.forwardRef<
    React.ElementRef<typeof View>,
    BillDisplayProps
>(({ className, data, imageClassName, onChange, ...props }, ref) => (
    <View ref={ref} className={cn("w-full relative flex flex-row items-center gap-2", className)} {...props}>
        <Image
            source={{ uri: data.media! }}
            className={cn("w-12 h-12", imageClassName)}
            resizeMode="cover"
        />
        <Input
            className="flex-1"
            keyboardType="number-pad"
            placeholder="Total (e.g: 200000000)"
            value={data.total ? data.total.toString() : ''}
            onChangeText={(total) => onChange({
                ...data,
                total: total?.length ? parseInt(total): undefined
            })}
        />
        <Label nativeID="totalCurrency">đ</Label>
    </View>
));
BillDisplay.displayName = 'BillDisplay';

/**
 * BillInput
 */

type BillInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    addText?: string,
    value?: ServiceLogBillDto[],
    onChange?: (value: ServiceLogBillDto[]) => any,
    imageContainerClassName?: string,
    onBlur?: () => any
}

const BillInput =  React.forwardRef<
    React.ElementRef<typeof View>,
    BillInputProps
>(({
    addText = 'Add',
    value,
    onChange,
    onBlur,
    imageContainerClassName,
    ...props
}, ref) => {
    const items = value || []

    async function onAddImages() {
        const assets = await Pickers.showImagePicker({ allowsMultipleSelection: true })
        if (assets.length) {
            const newValues = [
                ...items,
                ...assets.map(item => ({
                    media: item.uri
                }))
            ]
            if (onChange) {
                onChange(newValues)
            }
            if (onBlur) {
                onBlur()
            }
        }
    }

    function onItemChange(change: ServiceLogBillDto, index: number) {
        items[index] = change
        if (onChange) {
            onChange(items)
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
                {items.map((item, index) =>
                    <BillDisplay
                        key={`${index}-${item.media}`}
                        data={item}
                        onChange={change => onItemChange(change, index)}
                    />
                )}
            </View>
        </View>
    )
});
BillInput.displayName = 'BillInput';

export { BillDisplay as ImageDisplay, BillInput }