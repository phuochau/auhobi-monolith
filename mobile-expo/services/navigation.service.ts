import { NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/src/types";

export class NavigationService {
    static getDefaultScreenOptions = (options: Partial<NativeStackNavigationOptions> = {}): NativeStackNavigationOptions => ({
        headerBackButtonDisplayMode: 'minimal',
        headerBackButtonMenuEnabled: true,
        headerShadowVisible: false,
        headerBackImageSource: require('@/assets/icons/left-arrow.png'),
        ...options
    })

    static getDefaultBottomTabScreenOptions = (options: Partial<BottomTabNavigationOptions> = {}): BottomTabNavigationOptions => ({
        headerBackButtonDisplayMode: 'minimal',
        headerShadowVisible: false,
        ...options
    })
}