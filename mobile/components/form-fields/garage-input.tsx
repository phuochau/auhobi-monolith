import React from "react"
import { View } from "react-native"

export type GarageInputProps = React.ComponentPropsWithoutRef<typeof View> & {}

const GarageInput =  React.forwardRef<
    React.ElementRef<typeof View>,
    GarageInputProps
>(({
    ...props
}, ref) => {
    return (
        <View
            ref={ref}
        >
        </View>
    )
});
GarageInput.displayName = 'GarageInput';

export { GarageInput }