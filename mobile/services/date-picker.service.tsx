import React from "react"
import { DatePickerDialog, DatePickerDialogOptions } from "@/components/dialogs/date-picker-dialog"

class DatePickerServiceClass {
    ref: any

    openSinglePicker(options?: DatePickerDialogOptions) {
        if (this.ref) {
            this.ref.updateOptions({
                ...(options || {}),
                open: true,
                pickerProps: {
                    mode: 'single',
                    ...(options?.pickerProps || {}),
                }
            })
        }
    }

    openMultiplePicker(options?: DatePickerDialogOptions) {
        if (this.ref) {
            this.ref.updateOptions({
                ...(options || {}),
                open: true,
                pickerProps: {
                    mode: 'multiple',
                    ...(options?.pickerProps || {}),
                }
            })
        }
    }

    openRangePicker(options?: DatePickerDialogOptions) {
        if (this.ref) {
            this.ref.updateOptions({
                ...(options || {}),
                open: true,
                pickerProps: {
                    mode: 'range',
                    ...(options?.pickerProps || {})
                }
            })
        }
    }

    close() {
        if (this.ref) {
            this.ref.close()
        }
    }

    render() {
        return (
            <DatePickerDialog ref={ref => this.ref = ref} />
        )
    }
}

export const DatePickerService = new DatePickerServiceClass()