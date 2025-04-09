import { useAppSelector } from "@/hooks/store.hooks";
import { Navigation } from "@/lib/navigation";
import { selectCurrentAccount } from "@/store/user/user.selectors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";

export type AuthGuardProps = {
    children: React.ReactElement
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const account = useAppSelector(selectCurrentAccount)

  useEffect(() => {
    if (!account) {
      return Navigation.reset(router, { pathname: '/auth'})
    }
    if (!account!.user.vehicles?.nodes?.length) {
      return Navigation.reset(router, { pathname: '/onboarding'})
    }
    setLoading(false)
  }, [account])

  if (loading) {
    return null
  }

  return children
}