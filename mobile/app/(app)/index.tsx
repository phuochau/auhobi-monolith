import { Slot, useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { selectCurrentAccount } from "@/store/user/user.selectors"
import { useAppDispatch } from "@/hooks/store.hooks"
import { logout } from "@/store/user/user.slice"
import { meAsync } from "@/store/user/actions/me-async.action"

const LoadingScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const account = useSelector(selectCurrentAccount)

    useEffect(() => {
        setTimeout(async () => {
            try {
                if (account) {
                    await dispatch(meAsync())
                    router.replace({ pathname: '/dashboard' })
                } else {
                    router.replace({ pathname: '/auth' })
                }
            } catch (err) {
                dispatch(logout())
                router.replace({ pathname: '/auth' })
            }
        })
    }, [account])


    
    return (<Slot />)
}

export default LoadingScreen