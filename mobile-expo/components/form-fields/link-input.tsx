import { cn } from "@/lib/utils";
import React from "react";
import { View } from "react-native";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { Plus } from "@/lib/icons/Plus";
import { Input } from "../ui/input";
import _ from "lodash";
import { CircleMinus } from '@/lib/icons/CircleMinus'

export type LinkInputItemProps = React.ComponentPropsWithoutRef<typeof View> & {
    value: string,
    imageClassName?: string,
    onChangeText: (value: string) => any,
    onRequestRemove?: () => any,
    onBlur?: () => any
}


const LinkInputItem =  React.forwardRef<
    React.ElementRef<typeof View>,
    LinkInputItemProps
>(({ className, value, imageClassName, onChangeText, onRequestRemove, onBlur, ...props }, ref) => {
    return (
        <View ref={ref} className={cn("w-full relative flex flex-row items-center gap-2", className)} {...props}>
            <Input
                containerClassName="flex-1"
                placeholder="e.g: www.auhobi.com"
                keyboardType="url"
                autoCapitalize={'none'}
                value={value}
                onChangeText={(v) => onChangeText(v)}
                onBlur={onBlur}
            />
            <Button onPress={onRequestRemove} variant={'link'} size={'icon'}>
                <CircleMinus className="text-destructive" size={24} />
            </Button>
        </View>
    )
});
LinkInputItem.displayName = 'LinkInputItem';


type LinkInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    addText?: string,
    value?: string[],
    onChange?: (value: string[]) => any,
    listClassName?: string,
    onBlur?: () => any
}

const LinkInput =  React.forwardRef<
    React.ElementRef<typeof View>,
    LinkInputProps
>(({
    addText = 'Add',
    value,
    onChange,
    onBlur,
    listClassName,
    ...props
}, ref) => {
    const items = value || []

    async function onAddItem() {
        const newValues = [
            ...items,
            ''
        ]
        if (onChange) {
            onChange(newValues)
        }
    }

    function onItemChange(change: string, index: number) {
        items[index] = change
        if (onChange) {
            onChange(items)
        }
    }

    function onRemoveItemAtIndex(index: number) {
        if (onChange) {
            _.pullAt(items, index)
            onChange(items)
        }
    }

    return (
        <View
            ref={ref}
            {...props}
        >
            <Button onPress={onAddItem} variant={'secondary'} className="flex flex-row items-center justify-center gap-2">
                <Text>{addText}</Text>
                <Plus className="text-secondary-foreground" width={16}></Plus>
            </Button>
            <View className={cn('flex flex-row flex-wrap gap-2 mt-4', listClassName)}>
                {items.map((link, index) =>
                    <LinkInputItem
                        key={`${index}`}
                        value={link}
                        onChangeText={change => onItemChange(change, index)}
                        onRequestRemove={() => onRemoveItemAtIndex(index)}
                    />
                )}
            </View>
        </View>
    )
});
LinkInput.displayName = 'LinkInput';

export { LinkInputItem, LinkInput }