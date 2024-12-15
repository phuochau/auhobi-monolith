import { SortDirection, VehicleBaseModel, VehicleBaseModelConnection, VehicleBaseModelFilter, VehicleBaseModelSortFields, VehicleBrand, VehicleBrandConnection, VehicleBrandSortFields, VehicleModel, VehicleModelConnection, VehicleModelSortFields } from "@/graphql/gql/generated-models"
import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from '../ui/button'
import { Text } from '../ui/text'
import { Input } from "../ui/input"
import dayjs from "dayjs"
import { useAppDispatch } from "@/hooks/store.hooks"
import { fetchVehicleBrandsAction } from "@/store/vehicle/actions/fetchVehicleBrands.action"
import { GraphQLResponse } from "@/graphql/types/graphql-response"
import { fetchVehicleBaseModelsAction } from "@/store/vehicle/actions/fetchVehicleBaseModels.action"
import { fetchVehicleModelsAction } from "@/store/vehicle/actions/fetchVehicleModels.action"
import _ from "lodash"

function getYears(): number[] {
    const years = []
    const now = dayjs().year()

    for (let i = now; i >= 1969; i--) {
        years.push(i)
    }

    return years
}

export type VehicleInputValue = {
    year?: string,
    brand?: string,
    baseModel?: string,
    subBaseModel?: string,
    // body?: string,
    model?: string,
    customModel?: string
}

export type VehicleInputProps = React.ComponentPropsWithoutRef<typeof View> & {
    value?: VehicleInputValue,
    onChange?: (value: VehicleInputValue) => any,
    onBlur?: () => any,
    onSelectModel?: (value: VehicleModel) => any,
}

const VehicleInput = React.forwardRef<
    React.ElementRef<typeof View>,
    VehicleInputProps
>((props, ref) => {
    const { value, onBlur, onChange, onSelectModel } = props
    const dispatch = useAppDispatch()
    const years = getYears()
    const [custom, setCustom] = useState(false)
    const [brands, setBrands] = useState<VehicleBrand[]>([])
    const [baseModels, setBaseModels] = useState<VehicleBaseModel[]>([])
    const [subBaseModels, setSubBaseModels] = useState<VehicleBaseModel[]>([])
    const [models, setModels] = useState<VehicleModel[]>([])

    const shouldShowBrand = Boolean(value?.year)
    const shouldShowBaseModel = shouldShowBrand && Boolean(value?.brand)
    const shouldShowSubBaseModel = shouldShowBaseModel && Boolean(value?.baseModel)
    const shouldShowModel = shouldShowSubBaseModel && Boolean(value?.subBaseModel)

    async function fetchBrands() {
        if (shouldShowBrand) {
            const selectedYear = parseInt(value!.year!)
            const { payload } = await dispatch(fetchVehicleBrandsAction({
                paging: {
                    first: 1000
                },
                filter: {
                    and: [
                        {
                            startYear: {
                                lte: selectedYear
                            }
                        }
                    ]
                },
                sorting: [{ direction: SortDirection.Asc, field: VehicleBrandSortFields.Name }]
            }))

            const brandConnection = payload as GraphQLResponse<VehicleBrandConnection>

            setBrands((brandConnection.data?.edges || []).map(item => item.node))
        }
    }

    async function fetchBaseModels(parentId?: string) {
        if (shouldShowBaseModel) {
            if (parentId && !shouldShowSubBaseModel) {
                return
            }
            const selectedYear = parseInt(value!.year!)
            const selectedBrand = value!.brand!

            const filters: VehicleBaseModelFilter[] = [
                {
                    startYear: { lte: selectedYear }
                },
                {
                    or: [
                        {
                            endYear: { gte: selectedYear }
                        },
                        {
                            endYear: { is: null }
                        }
                    ]
                },
                {
                    brand: {
                        id: { eq: selectedBrand }
                    }
                }
            ]

            if (parentId) {
                filters.push(
                    {
                        parent: {
                            id: { eq: parentId }
                        }
                    }
                )
            } else {
                filters.push(
                    {
                        parent: {
                            id: { is: null }
                        }
                    }
                )
            }

            const { payload } = await dispatch(fetchVehicleBaseModelsAction({
                paging: {
                    first: 1000
                },
                filter: {
                    and: filters
                },
                sorting: [{ direction: SortDirection.Asc, field: VehicleBaseModelSortFields.Name }]
            }))

            const baseModelConnection = payload as GraphQLResponse<VehicleBaseModelConnection>

            if (parentId) {
                setSubBaseModels((baseModelConnection.data?.edges || []).map(item => item.node))
            } else {
                setBaseModels((baseModelConnection.data?.edges || []).map(item => item.node))
            }
        }
    }

    async function fetchModels() {
        if (shouldShowModel) {
            const selectedSubBaseModel = value?.subBaseModel
            const { payload } = await dispatch(fetchVehicleModelsAction({
                filter: {
                    and: [
                        // {
                        //     baseModel: {
                        //         id: { eq: selectedSubBaseModel }
                        //     }
                        // },
                        // TEST only
                        {
                            brand: {
                                id: { eq: value?.brand! }
                            }
                        }
                    ]
                },
                paging: {
                    first: 1000
                },
                sorting: [{ direction: SortDirection.Asc, field: VehicleModelSortFields.Name }]
            }))

            const connection = payload as GraphQLResponse<VehicleModelConnection>
            console.log('models:', connection)
            setModels((connection.data?.edges || []).map(item => item.node))

            notifySelectedModel()
        }
    }

    function getBaseModelName(item: VehicleBaseModel | undefined): string | null {
        if (!item) {
            return null
        }

        let name = item.name

        const yearParts = []
        if (item.startYear) {
            yearParts.push(item.startYear)
        }
        if (item.endYear) {
            yearParts.push(item.endYear)
        } else {
            yearParts.push('now')
        }

        return `${name} (${yearParts.join(' - ')})`
    }

    function getModelName(item: VehicleModel | undefined): string | null {
        if (!item) {
            return null
        }

        let name = item.name

        const yearParts = []
        if (item.startYear) {
            yearParts.push(item.startYear)
        }
        if (item.endYear) {
            yearParts.push(item.endYear)
        } else {
            yearParts.push('now')
        }

        return `${name} (${yearParts.join(' - ')})`
    }

    function notifySelectedModel() {
        if (value?.model && onSelectModel) {
            const model = models.find(item => item.id === value?.model)
            if (model) {
                onSelectModel(model)
            }
        }
    }

    function onValueChange(fieldKey: keyof VehicleInputValue, fieldValue: any) {
        const newValue = {
            ...(value || {}),
            [fieldKey]: fieldValue
        }

        switch (fieldKey) {
            case 'year':
                newValue.brand = undefined
                setBrands([])
                newValue.baseModel = undefined
                setBaseModels([])
                newValue.subBaseModel = undefined
                setSubBaseModels([])
                newValue.model = undefined
                setModels([])
                break
            case 'brand':
                newValue.baseModel = undefined
                setBaseModels([])
                newValue.subBaseModel = undefined
                setSubBaseModels([])
                newValue.model = undefined
                setModels([])
                break;
            case 'baseModel':
                newValue.subBaseModel = undefined
                setSubBaseModels([])
                newValue.model = undefined
                setModels([])
                break;
            case 'subBaseModel':
                newValue.model = undefined
                setModels([])
                break;
        }

        if (onChange) {
            onChange(_.pickBy(newValue, v => !_.isNil(v)))
        }

        if (onBlur) {
            onBlur()
        }
    }

    useEffect(() => { fetchBrands() }, [value?.year])
    useEffect(() => { fetchBaseModels() }, [value?.brand])
    useEffect(() => { fetchBaseModels(value?.baseModel) }, [value?.baseModel])
    useEffect(() => { fetchModels() }, [value?.subBaseModel])

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
                            value={value?.brand ? { label: brands.find(item => item.id === value.brand)?.name || value.brand, value: value.brand } : undefined}
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
                            value={value?.baseModel ? { label: getBaseModelName(baseModels.find(item => item.id === value.baseModel)) || value.baseModel, value: value.baseModel } : undefined}
                            onValueChange={(option) => {
                                onValueChange('baseModel', option?.value)
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
                                    <SelectItem key={baseModel.id} label={getBaseModelName(baseModel) || baseModel.name} value={baseModel.id}>
                                        {getBaseModelName(baseModel)}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}


                    {/** Sub Base Model */}
                    {shouldShowSubBaseModel &&
                        <Select
                            value={value?.subBaseModel ? { label: getBaseModelName(subBaseModels.find(item => item.id === value.subBaseModel)) || value.subBaseModel, value: value.subBaseModel } : undefined}
                            onValueChange={(option) => {
                                onValueChange('subBaseModel', option?.value)
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={'Select Sub Model'}
                                    value={value?.subBaseModel}
                                />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {subBaseModels.map(baseModel =>
                                    <SelectItem key={baseModel.id} label={getBaseModelName(baseModel) || baseModel.name} value={baseModel.id}>
                                        {getBaseModelName(baseModel)}
                                    </SelectItem>)}
                            </SelectContent>
                        </Select>}


                    {/** Model */}
                    {shouldShowModel &&
                        <Select
                            value={value?.model ? { label: getModelName(models.find(item => item.id === value.model)) || value.model, value: value.model } : undefined}
                            onValueChange={(option) => {
                                onValueChange('model', option?.value)
                                if (option?.value) {
                                    notifySelectedModel()
                                }
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
                                    <SelectItem key={model.id} label={getModelName(model) || model.name} value={model.id}>
                                        {getModelName(model)}
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