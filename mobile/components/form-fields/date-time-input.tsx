import { forwardRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { cn } from '@/lib/utils';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs'
import { Calendar } from '@/lib/icons/Calendar'
import { Clock8 } from '@/lib/icons/Clock8'

type DateTimeInputProps = {
    containerClassName?: string,
    dateFormat?: string,
    pickerConfig?: {
        mode?: string,
        is24Hour?: boolean
    }
}

const DateTimeInput = forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput> & DateTimeInputProps
>(({
    containerClassName,
    className,
    placeholderClassName,
    pickerConfig = { mode: 'date', is24Hour: true },
    editable = false,
    dateFormat = 'DD/MM/YYYY',
    value,
    onChange,
    onChangeText,
    ...props
}, ref) => {
    const [showPicker, setShowPicker] = useState(false);
    const date = getDateFromValue(value)
    const displayText = date ? dayjs(date).format(dateFormat) : ''

    function getDateFromValue(value: string | undefined): Date {
        if (value?.length) {
            return dayjs(value).toDate()
        }

        return new Date()
    }

    function onSelectDate(event: DateTimePickerEvent, date?: Date) {
        setShowPicker(false)
        if (date) {
            if (onChangeText) {
                const value = dayjs(date).toISOString()
                onChangeText(value)
            }
        }
    }

    return (
        <View className={cn('flex flex-col justify-center relative', containerClassName)}>
            <TextInput
                ref={ref}
                onPress={() => {
                    if (!showPicker) {
                        setShowPicker(true)
                    }
                }}
                className={cn(
                    'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background pl-3 pr-6 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
                    editable === false && 'web:cursor-not-allowed',
                    className
                )}
                placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
                value={displayText}
                {...props}
                editable={false}
            />

            <View className="absolute right-2.5 top-2.5">
                {pickerConfig?.['mode'] === 'date' && <Calendar className='text-primary' />}
                {pickerConfig?.['mode'] === 'time' && <Clock8 className='text-primary' />}
            </View>

            {showPicker && (
              <DateTimePicker
                testID="dateTimeInputPicker"
                {...pickerConfig}
                value={date}
                onChange={onSelectDate}
              />
            )}
        </View>
    );
});

DateTimeInput.displayName = 'DateTimeInput';

export { DateTimeInput };