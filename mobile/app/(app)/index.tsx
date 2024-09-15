import { Slot, useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { selectCurrentAccount } from "@/store/user/user.selectors"
import { useAppDispatch } from "@/hooks/store.hooks"
import { logout } from "@/store/user/user.slice"
import { meAsync } from "@/store/user/actions/me-async.action"
import { Navigation } from "@/lib/navigation"

const LoadingScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const account = useSelector(selectCurrentAccount)

    useEffect(() => {
        setTimeout(async () => {
            try {
                if (account) {
                    await dispatch(meAsync())
                    Navigation.reset(router, { pathname: '/dashboard'})
                } else {
                    Navigation.reset(router, { pathname: '/auth'})
                }
            } catch (err) {
                dispatch(logout())
                Navigation.reset(router, { pathname: '/auth'})
            }
        })
    }, [account])


    
    return (<Slot />)
}

export default LoadingScreen