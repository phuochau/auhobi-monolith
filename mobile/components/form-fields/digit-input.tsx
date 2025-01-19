import { cn } from "@/lib/utils"
import { View } from "react-native"
import { Input } from "../ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Controller, useForm } from "react-hook-form"
import { useEffect, useRef, useState } from "react"
import _ from "lodash"

export type DigitInputProps = {
    length?: number,
    className?: string,
    inputContainerClassName?: string,
    inputClassName?: string,
    value?: string[],
    onComplete?: (value: string[]) => any
}

export const DigitInput = (props: DigitInputProps) => {
    const {
        length = 6,
        value,
        className,
        inputContainerClassName,
        inputClassName,
        onComplete
    } = props

    const [defaultValues, setDefaultValues] = useState(value || buildDefaultValue())

    const formSchema = buildFormSchema()
    const inputRefs = buildInputRefs()

    function buildFormSchema() {
        const fields: any = {}
        for (let i = 0; i < length; i++) {
            fields[`${i}`] = z.string().min(1).max(1)
        }

        return z.object(fields)
    }

    function buildDefaultValue() {
        const values: any = {}
        for (let i = 0; i < length; i++) {
            values[`${i}`] = ''
        }

        return values
    }

    function buildInputRefs() {
        const refs = []
        for (let i = 0; i < length; i++) {
            refs.push(useRef<any>())
        }

        return refs
    }
 
    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (onComplete) {
            onComplete(Object.values(values))
        }
    }

    const {
      control,
      getValues
    } = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: defaultValues
    })

    useEffect(() => {
        if (value && !_.isEqual(value, defaultValues)) {
            setDefaultValues(value)
        }
    }, [value])

    return (
        <View className={cn('flex flex-row items-center justify-between gap-2 h-12', className)}>
            {Object.keys(defaultValues).map((key, index) =>
                <View key={key} className={cn('flex-1', inputContainerClassName)}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                key={index}
                                ref={inputRefs[index]}
                                keyboardType="number-pad"
                                maxLength={1}
                                onBlur={onBlur}
                                value={value}
                                onKeyPress={({ nativeEvent }) => {
                                  if (nativeEvent.key === 'Backspace') {
                                    if (!value?.length) {
                                        if (index > 0) {
                                            inputRefs[index - 1].current.focus()
                                        }
                                    }
                                  }
                                }}
                                onChangeText={(text) => {
                                    onChange(text)
                                    if (text.length) {
                                        if (index < length - 1) {
                                            inputRefs[index + 1].current.focus()
                                        } else {
                                            inputRefs[index].current.blur()
                                            onSubmit(getValues())
                                        }
                                    }
                                }}
                                className={cn('text-center !text-3xl font-semibold', inputClassName)}
                            />
                        )}
                        name={key}
                    />
                </View>)}
        </View>
    )
}
DigitInput.displayName = 'DigitInput';