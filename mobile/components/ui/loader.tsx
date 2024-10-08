import { cn } from "@/lib/utils"
import { ActivityIndicator, Platform } from "react-native"
import Svg, { Path, Circle } from "react-native-svg"

type LoaderProps = {
    className?: string
}

export const Loader = (props: LoaderProps) => {
    if (Platform.OS === 'web') {
        return (
            <Svg className={cn("animate-spin -ml-1 mr-3 h-5 w-5 text-white", props.className)} fill="none" viewBox="0 0 24 24">
              <Circle opacity={0.25} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></Circle>
              <Path opacity={0.75} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></Path>
            </Svg>
        )
    }

    return <ActivityIndicator className={cn("text-primary-foreground", props.className)} />
}

Loader.displayName = 'Loader'