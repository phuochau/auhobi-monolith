import { LoginResult, LoginTracking, Profile, Settings } from 'react-native-fbsdk-next';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';
import { LoginManager } from "react-native-fbsdk-next";
import FBProfile from 'react-native-fbsdk-next/lib/typescript/src/FBProfile';

export namespace FacebookApi {
    export const initSDK = async () => {
        Settings.initializeSDK();
        
        const { status } = await requestTrackingPermissionsAsync(); 
        if (status === 'granted') {
            await Settings.setAdvertiserTrackingEnabled(true);
        }
    }

    export const login = (permissions: Array<string> = ["public_profile"], loginTrackingIOS?: LoginTracking, nonceIOS?: string): Promise<LoginResult> => {
        return LoginManager.logInWithPermissions(permissions, loginTrackingIOS, nonceIOS)
    }

    export const getProfile = (): Promise<FBProfile | null> => {
        return Profile.getCurrentProfile()
    }
}