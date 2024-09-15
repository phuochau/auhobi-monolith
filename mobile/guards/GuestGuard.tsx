import { Navigation } from "@/lib/navigation";
import { selectCurrentAccount } from "@/store/user/user.selectors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface GuestGuardProps {
    children: React.ReactElement
}

export function GuestGuard({ children }: GuestGuardProps) {
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const account = useSelector(selectCurrentAccount)

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