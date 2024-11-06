import { VehicleBaseModel, VehicleBody, VehicleBrand, VehicleModel } from "@/graphql/gql/generated-models"
import React, { useState } from "react"
import { View } from "react-native"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from '../ui/button'
import { Text } from '../ui/text'
import { Input } from "../ui/input"

export type VehicleInputValue = {
    year?: string,
    brand?: string,
    baseModel?: string,
    subBaseModel?: string,
    body?: string,
    model?: string,
    customModel?: string
}

export type VehicleInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    value?: VehicleInputValue,
    onChange?: (value: VehicleInputValue) => any,
    onBlur?: () => any
}

const VehicleInput =  React.forwardRef<
    React.ElementRef<typeof View>,
    VehicleInputProps
>((props, ref) => {
    const { value, onBlur, onChange } = props
    const [custom, setCustom] = useState(false)

    const years = [2020, 2021, 2022, 2023, 2024]
    const brands: VehicleBrand[] = [
        { id: '1', name: 'Audi', createdAt: '2024' },
        { id: '2', name: 'BMW', createdAt: '2024' },
        { id: '3', name: 'Mercedes', createdAt: '2024' }
    ]
    const baseModels: VehicleBaseModel[] = [
        { id: '1', name: 'Audi A6', createdAt: '2024', brand: brands[0] },
        { id: '2', name: 'BMW 5 series', createdAt: '2024', brand: brands[1] },
        { id: '3', name: 'Mercedes 10', createdAt: '2024', brand: brands[2] }
    ]
    const bodies: VehicleBody[] = [
        { id: '1', name: 'Hatchback', createdAt: '2024'},
        { id: '2', name: 'Sedan', createdAt: '2024' },
    ]
    const models: VehicleModel[] = [
        { id: '1', name: 'BMW 520i', createdAt: '2024', baseModel: baseModels[0], body: bodies[0], brand: brands[0]},
        { id: '2', name: 'Sedan', createdAt: '2024', baseModel: baseModels[0], body: bodies[0], brand: brands[0] },
    ]

    function onValueChange(fieldKey: string, fieldValue: any) {
        if (onChange) {
            onChange({
                ...(value || {}),
                [fieldKey]: fieldValue
            })
        }

        if (onBlur) {
            onBlur()
        }
    }

    const shouldShowBrand = Boolean(value?.year)
    const shouldShowBaseModel = shouldShowBrand && Boolean(value?.brand)
    const shouldShowSubBaseModel = shouldShowBaseModel && Boolean(value?.baseModel)
    const shouldShowBody = shouldShowSubBaseModel && Boolean(value?.subBaseModel)
    const shouldShowModel = shouldShowBody && Boolean(value?.body)

    return (
        <View ref={ref} className="gap-4">
            {!custom &&
                <>
                    {/** Year */}
                    <Select
                        value={value?.year ? { label: `${value.year}`, value: value.year } : undefined}
                        onValueChange={(option) => {
                            onValueChange('year', option?.value)
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue
                                placeholder={'Select Year'}
                                value={value?.year}
                            />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                            {years.map(year =>
                                <SelectItem key={year} label={`${year}`} value={`${year}`}>
                                    {`${year}`}
                                </SelectItem>)}
                        </SelectContent>
                    </Select>
        
                    {/** Brand */}
                    {shouldShowBrand &&
                        <Select
                            value={value?.brand ? { label: `Test Brand`, value: value.brand} : undefined}
                            onValueChange={(option) => {
                                onValueChange('brand', option?.value)
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={'Select Brand'}
                                    value={value?.brand}
                                />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {brands.map(brand =>
                                    <SelectItem key={brand.id} label={brand.name} value={brand.id}>
                                        {brand.name}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}
        
                    {/** Base Model */}
                    {shouldShowBaseModel &&
                        <Select
                            value={value?.baseModel ? { label: `Test Base Model`, value: value.baseModel} : undefined}
                            onValueChange={(option) => {
                                onValueChange('baseModel', option)
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={'Select Base Model'}
                                    value={value?.baseModel}
                                />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {baseModels.map(baseModel =>
                                    <SelectItem key={baseModel.id} label={baseModel.name} value={baseModel.id}>
                                        {baseModel.name}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}
        
        
                    {/** Sub Base Model */}
                    {shouldShowSubBaseModel &&
                        <Select
                            value={value?.subBaseModel ? { label: `Test Sub Base Model`, value: value.subBaseModel} : undefined}
                            onValueChange={(option) => {
                                onValueChange('subBaseModel', option)
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={'Select Sub Model'}
                                    value={value?.subBaseModel}
                                />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {baseModels.map(baseModel =>
                                    <SelectItem key={baseModel.id} label={baseModel.name} value={baseModel.id}>
                                        {baseModel.name}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}
        
        
                    {/** Body */}
                    {shouldShowBody &&
                        <Select
                            value={value?.body ? { label: `Test Body`, value: value.body} : undefined}
                            onValueChange={(option) => {
                                onValueChange('body', option)
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={'Select Body'}
                                    value={value?.body}
                                />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {bodies.map(body =>
                                    <SelectItem key={body.id} label={body.name} value={body.id}>
                                        {body.name}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}
        
        
                    {/** Model */}
                    {shouldShowModel &&
                        <Select
                            value={value?.model ? { label: `Test Model`, value: value.model} : undefined}
                            onValueChange={(option) => {
                                onValueChange('model', option)
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={'Select Model'}
                                    value={value?.model}
                                />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {models.map(model =>
                                    <SelectItem key={model.id} label={model.name} value={model.id}>
                                        {model.name}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}
                </>
            }

            {custom &&
                <Input
                    placeholder="Custom model (e.g: BMW 520i 2016 LCI)"
                    value={value?.customModel}
                    onChangeText={(text) => onValueChange('customModel', text)}
                    onBlur={onBlur}
                />}

            <View className="text-center flex flex-row items-center">
                <Button onPress={() => setCustom(!custom)} variant={'link'} className="underline !px-0">
                    <Text className="font-semibold text-sm underline text-primary">{custom ? 'Select a car model' : "Don't see your car model?"}</Text>
                </Button>
            </View>
        </View>
    )
})

VehicleInput.displayName = 'VehicleInput'

export { VehicleInput }