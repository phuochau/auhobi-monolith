import { selectCurrentAccount } from "@/store/user/user.selectors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface OnboardingGuardProps {
    children: React.ReactElement
}

export function OnboardingGuard({ children }: OnboardingGuardProps) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const account = useSelector(selectCurrentAccount)

  useEffect(() => {
    if (!account) {
      return router.replace({ pathname: '/auth' })
    }
    if (account?.user.vehicles?.nodes?.length) {
      return router.replace({ pathname: '/dashboard' })
    }
    setLoading(false)
  }, [account])

  if (loading) {
    return null
  }

  return children
}