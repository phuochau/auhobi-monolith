import { Pressable, TextInput, View } from "react-native"
import { cn } from "@/lib/utils";
import React, { useState } from "react"
import { GaragePickerDialog, GaragePickerResult, GarageType } from "../dialogs/garare-picker-dialog";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";
import { Garage } from "@/graphql/gql/generated-models";
import { useTheme } from "@react-navigation/native";

export type GarageInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    textInput: React.ComponentPropsWithoutRef<typeof TextInput>,
    value?: GaragePickerResult,
    onChange?: (result: GaragePickerResult) => any,
}

const GarageInput =  React.forwardRef<
    React.ElementRef<typeof View>,
    GarageInputProps
>(({
    textInput,
    value,
    onChange,
    ...props
}, ref) => {
    const { colors } = useTheme();
    const [gararaDialogOpen, setGarageDialogOpen] = useState(false)
    const [textValue, setTextValue] = useState<string>(getTextFromValue(value))

    function openDialog() {
        setGarageDialogOpen(true)
    }

    function closeDialog() {
        setGarageDialogOpen(false)
    }

    function getTextFromValue(result: GaragePickerResult | undefined): string {
        if (result && result.data) {
            if (result.type === GarageType.CUSTOM) {
                return (result.data as string) || ''
            } else if (result.type === GarageType.GOOGLE_MAPS) {
                const place = result.data as PlaceAutocompleteResult
                return place.structured_formatting?.main_text || ''
            } else {
                const garage = result.data as Garage
                return garage.name || ''
            }
        }

        return ''
    }

    function onChosenGarage(result: GaragePickerResult) {
        setTextValue(getTextFromValue(result))
        if (onChange) {
            onChange(result)
        }
    }

    return (
        <View ref={ref} {...props}>
            <Pressable onPress={() => openDialog()}>
                <View pointerEvents="none">
                    <TextInput
                        className={cn(
                            'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
                            textInput?.className
                        )}
                        style={{ color: colors.text }}
                        placeholderClassName={cn('text-muted-foreground', textInput?.placeholderClassName)}
                        editable={false}
                        {...textInput}
                        value={textValue}
                    />
                </View>
            </Pressable>
            <GaragePickerDialog
                open={gararaDialogOpen}
                onRequestClose={closeDialog}
                onChange={onChosenGarage}
            />
        </View>
    )
});
GarageInput.displayName = 'GarageInput';

export { GarageInput }