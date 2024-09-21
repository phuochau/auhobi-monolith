'use client'

import { Pressable, TextInput, View } from "react-native"
import { cn } from "@/lib/utils";
import React, { useState } from "react"
import { GaragePickerDialog } from "../dialogs/garare-picker-dialog";

export type GarageInputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {}

const GarageInput =  React.forwardRef<
    React.ElementRef<typeof TextInput>,
    GarageInputProps
>(({
    className,
    placeholderClassName,
    ...props
}, ref) => {
    const [gararaDialogOpen, setGarageDialogOpen] = useState(false)

    function openDialog() {
        setGarageDialogOpen(true)
    }

    function closeDialog() {
        setGarageDialogOpen(false)
    }

    return (
        <View>
            <Pressable onPress={openDialog}>
                <TextInput
                    ref={ref}
                    className={cn(
                        'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
                        props.editable === false && 'opacity-50 web:cursor-not-allowed',
                        className
                    )}
                    placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
                    readOnly={true}
                    {...props}
                />
            </Pressable>
            <GaragePickerDialog open={gararaDialogOpen} onRequestClose={closeDialog} />
        </View>
    )
});
GarageInput.displayName = 'GarageInput';

export { GarageInput }