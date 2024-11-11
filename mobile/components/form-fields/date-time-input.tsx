import React, { forwardRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs'
import { Calendar } from '@/lib/icons/Calendar'
import { Clock8 } from '@/lib/icons/Clock8'
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogClose } from '../ui/dialog';
import DateTimePicker from 'react-native-ui-datepicker';
import { Button } from '../ui/button';
import { Text } from '../ui/text'
 

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
                <TouchableOpacity 
                    activeOpacity={1}
                    className={cn('flex flex-col justify-center relative', containerClassName)}
                    onPress={() => {
                        if (!shownPicker) {
                            setShowPicker(true)
                        }
                    }}
                >
                    <View pointerEvents='none'>
                        <TextInput
                            ref={ref}
                            className={cn(
                                'web:flex h-12 native:h-14 web:w-full rounded-xl border border-input bg-background pl-3 pr-6 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
                                editable === false && 'web:cursor-not-allowed',
                                className
                            )}
                            placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
                            value={displayText}
                            {...props}
                            editable={false}
                        />

                    </View>

                    <View className="absolute right-2.5 top-2.5">
                        {timePicker ? <Clock8 className='text-primary' /> : <Calendar className='text-primary' />}
                    </View>
                </TouchableOpacity>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]' xClassName='hidden'>
                <DateTimePicker
                    mode={mode}
                    date={date}
                    onChange={(params: any) => onSelectDate(params)}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={'outline'} onPress={() => setShowPicker(false)}>
                      <Text>Close</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
});

DateTimeInput.displayName = 'DateTimeInput';

export { DateTimeInput };