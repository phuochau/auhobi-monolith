import { useAppSelector } from "@/hooks/store.hooks";
import { Navigation } from "@/lib/navigation";
import { selectCurrentAccount } from "@/store/user/user.selectors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";

export type GuestGuardProps = {
    children: React.ReactElement
}

export function GuestGuard({ children }: GuestGuardProps) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const account = useAppSelector(selectCurrentAccount)

    useEffect(() => {
      if (account) {
        return Navigation.reset(router, { pathname: '/dashboard'})
      }
      setLoading(false)
    }, [account])

    if (loading) {
      return null
    }
  
    return children
  }