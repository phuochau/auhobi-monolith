import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import * as LabelPrimitive from '@rn-primitives/label';
import { FieldError } from "react-hook-form";

export type FormMessageProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text> & {
    error: FieldError | undefined,
    nativeID?: string
}

export const FormMessage = forwardRef<
    React.ElementRef<typeof LabelPrimitive.Text>,
  FormMessageProps
>(({ className, error, onPress, onLongPress, onPressIn, onPressOut, children, ...props }, ref) => {
    const body = error ? String(error?.message) : children

    if (!body) {
        return null
    }

    return (
        <LabelPrimitive.Root
        className='web:cursor-default'
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        >
        <LabelPrimitive.Text
            ref={ref}
            className={cn(
            'text-sm text-destructive native:text-base font-medium leading-none web:peer-disabled:cursor-not-allowed web:peer-disabled:opacity-70',
            className
            )}
            {...props}
        >{body}</LabelPrimitive.Text>
        </LabelPrimitive.Root>
    )
})
FormMessage.displayName = "FormMessage"