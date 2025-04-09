import { Dayjs } from "dayjs"
import _ from "lodash"
import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import DateTimePicker, { DateType } from "react-native-ui-datepicker"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog"
import { Text } from '../ui/text'
import { cn } from "@/lib/utils"
import { DatePickeMultipleProps, DatePickerRangeProps, DatePickerSingleProps } from "react-native-ui-datepicker/lib/typescript/src/DateTimePicker"

type SingleChangeValue = { date: DateType }

type MultiChangeValue = {
  dates: DateType[];
  datePressed: DateType;
  change: 'added' | 'removed';
}

type RangeChangeValue = {
  startDate: DateType;
  endDate: DateType;
}

export type DatePickerDialogValue = SingleChangeValue | MultiChangeValue | RangeChangeValue

type RNUIDatePickerProps = DatePickerSingleProps | DatePickerRangeProps | DatePickeMultipleProps

export type DatePickerDialogOptions = {
  open?: boolean,
  date?: Dayjs,
  onCancel?: () => any,
  onConfirm?: (result: DatePickerDialogValue) => any,
  containerClassName?: string,
  cancelText?: string,
  cancelClassName?: string,
  cancelTextClassName?: string,
  confirmText?: string
  confirmClassName?: string,
  confirmTextClassName?: string,
  initialValue?: DatePickerDialogValue,
  pickerProps?: Partial<RNUIDatePickerProps>
}

export type DatePickerDialogProps = {
  options?: DatePickerDialogOptions
}

export const DatePickerDialog = forwardRef((props: DatePickerDialogProps, ref) => {
  const [options, setOptions] = useState(props.options || null)
  const [result, setResult] = useState<DatePickerDialogValue | undefined>(props.options?.initialValue)

  function updateOptions(newOptions: DatePickerDialogOptions) {
    setOptions(newOptions)
  }

  function close() {
    if (options?.onCancel) {
      options.onCancel()
    }
    setOptions(null)
  }

  function confirm() {
    if (result) {
      if (options?.onConfirm) {
        options.onConfirm(result)
      }
      setOptions(null)
    }
  }

  function onChange(params: DatePickerDialogValue) {
    setResult(params)
  }

  useImperativeHandle(ref, () => {
    return {
      updateOptions,
      close
    };
  }, []);

  useEffect(() => {
    if (props.options && !_.isEqual(options, props.options)) {
      setOptions(props.options)
    }
  }, [props.options])

  if (!options || !options?.open) {
    return null
  }

  return (
    <AlertDialog open={options.open || false}>
      <AlertDialogContent className={cn("w-11/12", options.containerClassName)}>
        <AlertDialogHeader>
          <DateTimePicker
            mode='single'
            {...(options.pickerProps || {})}
            onChange={(result: any) => onChange(result)}
            {...(result || {})}
          />
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-row">
          <AlertDialogCancel className={cn('flex-1 border-muted-foreground flex flex-col items-center', options.cancelClassName)} onPress={() => close()}>
            <Text className={cn('text-muted-foreground', options.cancelTextClassName)}>{options.cancelText || 'Cancel'}</Text>
          </AlertDialogCancel>
          <AlertDialogAction className={cn('flex-1 flex flex-col items-center', options.confirmClassName)} onPress={() => confirm()}>
            <Text className={options.confirmTextClassName}>{options.confirmText || 'Confirm'}</Text>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
})