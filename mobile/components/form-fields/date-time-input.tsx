import React, { forwardRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs'
import { Calendar } from '@/lib/icons/Calendar'
import { Clock8 } from '@/lib/icons/Clock8'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogDescription } from '../ui/dialog';
import DateTimePicker from 'react-native-ui-datepicker';


type DateTimeInputProps = {
    containerClassName?: string,
    dateTimeFormat?: string,
    timePicker?: boolean,
    mode?: 'single' | 'range' | 'multiple'
}

const DateTimeInput = forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput> & DateTimeInputProps
>(({
    containerClassName,
    className,
    placeholderClassName,
    editable = false,
    mode = 'single',
    dateTimeFormat = 'DD/MM/YYYY',
    value,
    timePicker,
    onChange,
    onChangeText,
    ...props
}, ref) => {
    const [shownPicker, setShowPicker] = useState(false);
    const date = getDateFromValue(value)
    const displayText = date ? dayjs(date).format(dateTimeFormat) : ''

    function getDateFromValue(value: string | undefined): Date {
        if (value?.length) {
            return dayjs(value).toDate()
        }

        return new Date()
    }

    function onSelectDate(params: any): void {
        if (mode === 'single') {
            const newDate = params.date
            setShowPicker(false)
            if (date) {
                if (onChangeText) {
                    const value = dayjs(newDate).toISOString()
                    onChangeText(value)
                }
            }
        }
    }

    return (
        <Dialog open={shownPicker}>
            <DialogTrigger asChild>
                <View className={cn('flex flex-col justify-center relative', containerClassName)}>
                    <TextInput
                        ref={ref}
                        onPress={() => {
                            if (!shownPicker) {
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
                        {timePicker ? <Clock8 className='text-primary' /> : <Calendar className='text-primary' />}
                    </View>
                </View>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogDescription>
                        <DateTimePicker
                            mode={mode}
                            date={date}
                            onChange={(params: any) => onSelectDate(params)}
                        />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
});

DateTimeInput.displayName = 'DateTimeInput';

export { DateTimeInput };