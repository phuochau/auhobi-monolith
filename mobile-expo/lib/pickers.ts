import * as ImagePicker from 'expo-image-picker';

export namespace Pickers {
    export const showImagePicker = (options?: ImagePicker.ImagePickerOptions): Promise<ImagePicker.ImagePickerAsset[]> => {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 1,
                    ...(options || {})
                });
            
                if (!result.canceled) {
                    resolve(result.assets)
                }
                resolve([])
            } catch (err) {
                reject(err)
            }
        })
    }
}