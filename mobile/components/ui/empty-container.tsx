import React from "react";
import { View } from "react-native"
import { Text } from '../ui/text'
import { cn } from "@/lib/utils";

export type EmptyContainerProps = React.ComponentPropsWithoutRef<typeof View> & {
  title?: string,
  description?: string,
  titleClassName?: string,
  descriptionClassName?: string
}

export const EmptyContainer =  React.forwardRef<
    React.ElementRef<typeof View>,
    EmptyContainerProps
>(({
    title,
    description,
    titleClassName,
    descriptionClassName,
    className,
    ...props
}, ref) => {

    return (
        <View
            ref={ref}
            {...props}
            className={cn("flex flex-col gap-2 items-center justify-center flex-1", className)}
        >
          {Boolean(title?.length) && <Text className={cn("text-foreground text-lg font-semibold", titleClassName)}>{title}</Text>}
          {Boolean(description?.length) && <Text className={cn("text-muted", descriptionClassName)}>{description}</Text>}
        </View>
    )
});
EmptyContainer.displayName = 'EmptyContainer';
