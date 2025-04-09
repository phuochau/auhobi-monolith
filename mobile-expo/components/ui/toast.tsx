import { View } from 'react-native';
import BaseToast, { BaseToastProps } from 'react-native-toast-message';
import { Text } from './text'

export namespace Toast {
    export const customConfig = {
        success: ({ text1, text2 }: BaseToastProps) => (
            <View className='w-full px-6'>
                <View className='bg-primary h-full p-4 rounded-2xl gap-1'>
                    {text1?.length && <Text className='text-primary-foreground font-semibold'>{text1}</Text>}
                    {text2?.length && <Text className='text-primary-foreground font-semibold'>{text2}</Text>}
                </View>
            </View>
        ),
        error: ({ text1, text2 }: BaseToastProps) => (
            <View className='w-full px-6'>
                <View className='bg-destructive h-full p-4 rounded-2xl gap-1'>
                    {text1?.length && <Text className='text-destructive-foreground font-semibold'>{text1}</Text>}
                    {text2?.length && <Text className='text-destructive-foreground font-semibold'>{text2}</Text>}
                </View>
            </View>
        ),
        info: ({ text1, text2 }: BaseToastProps) => (
            <View className='w-full px-6'>
                <View className='bg-secondary h-full p-4 rounded-2xl gap-1'>
                    {text1?.length && <Text className='text-secondary-foreground font-semibold'>{text1}</Text>}
                    {text2?.length && <Text className='text-secondary-foreground font-semibold'>{text2}</Text>}
                </View>
            </View>
        ),
        warn: ({ text1, text2 }: BaseToastProps) => (
            <View className='w-full px-6'>
                <View className='bg-warning h-full p-4 rounded-2xl gap-1'>
                    {text1?.length && <Text className='text-warning-foreground font-semibold'>{text1}</Text>}
                    {text2?.length && <Text className='text-warning-foreground font-semibold'>{text2}</Text>}
                </View>
            </View>
        ),
    };

    export const info = (message: string, options?: BaseToastProps) => {
        BaseToast.show({
            type: 'info',
            text1: message,
            ...(options || {})
        })
    }

    export const success = (message: string, options?: BaseToastProps) => {
        BaseToast.show({
            type: 'success',
            text1: message,
            ...(options || {})
        })
    }

    export const error = (message: string, options?: BaseToastProps) => {
        BaseToast.show({
            type: 'error',
            text1: message,
            ...(options || {})
        })
    }

    export const warn = (message: string, options?: BaseToastProps) => {
        BaseToast.show({
            type: 'warn',
            text1: message,
            ...(options || {})
        })
    }
}
