import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import DatePicker, { DateType } from 'react-native-ui-datepicker'
import dayjs, { Dayjs } from 'dayjs'
import { CalendarDays } from 'lucide-react-native'
import { cn } from '@/lib/utils'

export interface DateRange {
  startDate: Dayjs | null
  endDate: Dayjs | null
}

interface DateRangePickerProps {
  value?: DateRange
  onChange?: (range: DateRange) => void
  placeholder?: string
  className?: string
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select date range',
  className
}) => {
  // Bottom sheet ref
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const snapPoints = useMemo(() => ['60%'], [])

  // Local state for date range
  const [localValue, setLocalValue] = useState<DateRange>({
    startDate: value?.startDate || null,
    endDate: value?.endDate || null
  })

  // Handlers
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current?.present()
  }, [])

  const handleDismiss = useCallback(() => {
    bottomSheetRef.current?.dismiss()
  }, [])

  const handleValueChange = useCallback((value: { startDate?: DateType; endDate?: DateType }) => {
    const newRange = {
      startDate: value.startDate ? dayjs(value.startDate) : null,
      endDate: value.endDate ? dayjs(value.endDate) : null
    }
    setLocalValue(newRange)
    onChange?.(newRange)
  }, [onChange])

  const handleClear = useCallback(() => {
    const newRange = { startDate: null, endDate: null }
    setLocalValue(newRange)
    onChange?.(newRange)
    handleDismiss()
  }, [onChange])

  // Render backdrop
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  )

  // Format display text
  const displayText = useMemo(() => {
    if (!localValue.startDate && !localValue.endDate) {
      return placeholder
    }

    const start = localValue.startDate ? localValue.startDate.format('MMM D, YYYY') : ''
    const end = localValue.endDate ? localValue.endDate.format('MMM D, YYYY') : ''

    return `${start} ${end ? '- ' + end : ''}`
  }, [localValue, placeholder])

  return (
    <>
      <Pressable
        onPress={handlePresentPress}
        className={cn(
          'flex-row items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card',
          className
        )}
      >
        <CalendarDays size={20} className="text-foreground" />
        <Text className="text-sm flex-1 text-foreground">{displayText}</Text>
      </Pressable>

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
      >
        <View className="flex-1 px-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold">Select Date Range</Text>
            <Pressable onPress={handleClear}>
              <Text className="text-sm text-primary">Clear</Text>
            </Pressable>
          </View>

          <DatePicker
            mode="range"
            startDate={localValue.startDate?.toISOString()}
            endDate={localValue.endDate?.toISOString()}
            onChange={handleValueChange}
          />
        </View>
      </BottomSheetModal>
    </>
  )
} 