import React from 'react'
import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import { selectCurrentAccount } from "@/store/user/user.selectors"
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { meAction } from "@/store/user/actions/me.action"
import { Navigation } from "@/lib/navigation"
import { NavigationService } from '@/services/navigation.service'
import { signOutAction } from '@/store/user/actions/sign-out.action'

const LoadingScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const account = useAppSelector(selectCurrentAccount)

    useEffect(() => {
        setTimeout(async () => {
            // Navigation.reset(router, { pathname: '/dashboard'})
            try {
                if (account) {
                    await dispatch(meAction())
                    Navigation.reset(router, { pathname: '/dashboard'})
                } else {
                    Navigation.reset(router, { pathname: '/auth'})
                }
            } catch (err) {
                dispatch(signOutAction())
                Navigation.reset(router, { pathname: '/auth'})
            }
        })
    }, [account])


    
    return (
        <Stack screenOptions={NavigationService.getDefaultScreenOptions()}>
            <Stack.Screen name="auth" />
            <Stack.Screen name="dashboard" />
            <Stack.Screen name="onboarding" />
        </Stack>
    )
}

export default LoadingScreen