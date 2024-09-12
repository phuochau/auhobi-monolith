import { selectCurrentAccount } from "@/store/auth/auth.selectors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface AuthGuardProps {
    children: React.ReactElement
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const account = useSelector(selectCurrentAccount)

  useEffect(() => {
    if (!account) {
      return router.replace({ pathname: '/auth' })
    }
    setLoading(false)
  }, [account])

  if (loading) {
    return null
  }

  return children
}