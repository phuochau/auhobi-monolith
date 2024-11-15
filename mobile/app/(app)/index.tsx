import React from 'react'
import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import { selectCurrentAccount } from "@/store/user/user.selectors"
import { useAppDispatch, useAppSelector } from "@/hooks/store.hooks"
import { logout } from "@/store/user/user.slice"
import { meAsync } from "@/store/user/actions/me-async.action"
import { Navigation } from "@/lib/navigation"
import { NavigationService } from '@/services/navigation.service'

const LoadingScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const account = useAppSelector(selectCurrentAccount)

    useEffect(() => {
        setTimeout(async () => {
            console.log('go here')
            Navigation.reset(router, { pathname: '/dashboard'})
            // try {
            //     if (account) {
            //         await dispatch(meAsync())
            //         Navigation.reset(router, { pathname: '/dashboard'})
            //     } else {
            //         Navigation.reset(router, { pathname: '/auth'})
            //     }
            // } catch (err) {
            //     dispatch(logout())
            //     Navigation.reset(router, { pathname: '/auth'})
            // }
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