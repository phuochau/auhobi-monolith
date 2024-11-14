import { NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";

export class NavigationService {
    static getDefaultScreenOptions = (): NativeStackNavigationOptions => ({
        headerBackButtonDisplayMode: 'minimal',
        headerBackButtonMenuEnabled: true,
        headerShadowVisible: false,
        headerBackImageSource: require('@/assets/icons/left-arrow.png')
    })
}