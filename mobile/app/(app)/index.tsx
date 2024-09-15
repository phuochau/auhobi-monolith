import { Slot, useRouter } from "expo-router"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { selectCurrentAccount } from "@/store/user/user.selectors"

const LoadingScreen = () => {
    const router = useRouter()
    const account = useSelector(selectCurrentAccount)

    useEffect(() => {
        setTimeout(() => {
            if (account) {
                router.replace({ pathname: '/dashboard' })
            } else {
                router.replace({ pathname: '/auth' })
            }
        })
    }, [account])


    
    return (<Slot />)
}

export default LoadingScreen