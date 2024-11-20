import { Settings } from 'react-native-fbsdk-next';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

export namespace FacebookApi {
    export const initSDK = async () => {
        Settings.initializeSDK();
        
        const { status } = await requestTrackingPermissionsAsync(); 
        if (status === 'granted') {
            await Settings.setAdvertiserTrackingEnabled(true);
        }
    }
}