import { GraphQLAPI } from "@/graphql/api"
import { cn } from "@/lib/utils"
import React from "react"

export type Props = React.HTMLAttributes<HTMLParagraphElement> & {
    response: GraphQLAPI.Response<any> | undefined
}

export const GraphQLError = React.forwardRef<
    HTMLParagraphElement,
    Props
>(({ className, children, response, ...props }, ref) => {
  if (!response?.errors) {
    return null
  }

  const body = GraphQLAPI.getErrorString(response)

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
      {children}
    </p>
  )
})
GraphQLError.displayName = 'GraphQLError'