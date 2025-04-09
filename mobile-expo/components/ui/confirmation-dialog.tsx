import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./alert-dialog"
import { Text } from './text'
import _ from "lodash"
import { cn } from "@/lib/utils"

export type ConfirmationDialogOptions = {
    open?: boolean,
    title?: string,
    description?: string,
    containerClassName?: string,
    cancelText?: string,
    cancelClassName?: string,
    cancelTextClassName?: string,
    confirmText?: string
    confirmClassName?: string,
    confirmTextClassName?: string,
    onCancel?: () => any,
    onConfirm?: () => any
}

export type ConfirmationDialogProps = {
    options?: ConfirmationDialogOptions
}

export const ConfirmationDialog = forwardRef((props: ConfirmationDialogProps, ref) => {
    const [options, setOptions] = useState(props.options || null)

    function updateOptions(newOptions: ConfirmationDialogOptions) {
        setOptions(newOptions)
    }

    function close() {
        if (options?.onCancel) {
            options.onCancel()
        }
        setOptions(null)
    }

    function confirm() {
        if (options?.onConfirm) {
            options.onConfirm()
        }
        setOptions(null)
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

    if (!options) {
        return null
    }

    return (
        <AlertDialog open={options.open || false}>
            <AlertDialogContent className={cn("w-3/4", options.containerClassName)}>
                <AlertDialogHeader>
                    <AlertDialogTitle>{options.title}</AlertDialogTitle>
                    <AlertDialogDescription>{options.description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className={cn('border-muted-foreground', options.cancelClassName)} onPress={() => close()}>
                        <Text className={cn('text-muted-foreground', options.cancelTextClassName)}>{options.cancelText || 'Cancel'}</Text>
                    </AlertDialogCancel>
                    <AlertDialogAction className={cn(options.confirmClassName)} onPress={() => confirm()}>
                        <Text className={options.confirmTextClassName}>{options.confirmText || 'Confirm'}</Text>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
})