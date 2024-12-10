import { v2 as cloudinary, UploadApiOptions } from 'cloudinary'
import { Injectable } from '@nestjs/common';
import { CloudinaryResponse } from '../types/cloudinary-response';

@Injectable()
export class CloudinaryService {
    constructor() {
        this.init()
    }

    private init(): void {
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
    }

    private getResourceType(fileMimeType: string): "raw" | "image" | "video" | "auto" {
        if (fileMimeType.startsWith('image')) {
            return 'image'
        }

        if (fileMimeType.startsWith('video')) {
            return 'video'
        }

        return 'raw'
    }

    private getCloudinaryFolderPath(folderPath?: string): string {
        const rootDir = process.env.CLOUDINARY_FOLDER || ''

        if (folderPath?.length > 0) {
            return `${rootDir}/${folderPath}`
        }

        return rootDir
    }
    
    upload(file: Express.Multer.File, folderPath?: string, options?: Partial<UploadApiOptions>): Promise<CloudinaryResponse> {
        const opts: UploadApiOptions = {
            ...(options || {}),
            folder: this.getCloudinaryFolderPath(folderPath),
            resource_type: this.getResourceType(file.mimetype)
        };

        return new Promise<CloudinaryResponse>((resolve, reject) => {
            cloudinary.uploader.upload_stream(opts, (error, uploadResult) => {
                if (error) {
                    return reject(error)
                }
                return resolve(uploadResult);
            }).end(file.buffer)
        });
    }
    
    uploadByBuffer(buffer: Buffer, mimetype: string, folderPath?: string, options?: Partial<UploadApiOptions>): Promise<CloudinaryResponse> {
        const opts: UploadApiOptions = {
            ...(options || {}),
            folder: this.getCloudinaryFolderPath(folderPath),
            resource_type: this.getResourceType(mimetype),
        };

        return new Promise<CloudinaryResponse>((resolve, reject) => {
            cloudinary.uploader.upload_stream(opts, (error, uploadResult) => {
                if (error) {
                    return reject(error)
                }
                return resolve(uploadResult);
            }).end(buffer)
        });
    }
}
