import * as LabelPrimitive from '@rn-primitives/label';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { GraphQLAPI } from '@/graphql/api';
import { GraphQLResponse } from '@/graphql/types/graphql-response';

export type Props = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text> & {
    response: GraphQLResponse<any> | undefined
}

const GraphQLError = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Text>,
  Props
>(({ className, response, onPress, onLongPress, onPressIn, onPressOut, ...props }, ref) => {
  if (!response?.errors) {
    return null
  }

  const body = GraphQLAPI.getErrorString(response)

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
});

GraphQLError.displayName = 'GraphQLError';

export { GraphQLError };
