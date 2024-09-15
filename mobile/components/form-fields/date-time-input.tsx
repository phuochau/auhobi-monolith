import { forwardRef, useState } from 'react';
import { TextInput } from 'react-native';
import { cn } from '@/lib/utils';
import DateTimePicker, { AndroidNativeProps, DateTimePickerEvent, IOSNativeProps, WindowsNativeProps } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs'

interface DateTimeInputProps {
    dateFormat?: string,
    pickerConfig?: Partial<IOSNativeProps | AndroidNativeProps | WindowsNativeProps>
}

const DateTimeInput = forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput> & DateTimeInputProps
>(({
    className,
    placeholderClassName,
    pickerConfig: dateTimePicker = { mode: 'date', is24Hour: true },
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
        <>
            <TextInput
                ref={ref}
                onPress={() => {
                    if (!showPicker) {
                        setShowPicker(true)
                    }
                }}
                className={cn(
                    'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
                    editable === false && 'web:cursor-not-allowed',
                    className
                )}
                placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
                value={displayText}
                {...props}
            />

            {showPicker && (
              <DateTimePicker
                testID="dateTimeInputPicker"
                {...dateTimePicker}
                value={date}
                onChange={onSelectDate}
              />
            )}
        </>
    );
});

DateTimeInput.displayName = 'DateTimeInput';

export { DateTimeInput };