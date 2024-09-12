import { Injectable } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { Media } from '../entities/media.entity';
import { MediaService } from './media.service';
import { FileService } from './file.service';
import { File } from '../entities/file.entity';
import { PlatformConfig } from 'src/config/platform.config';

@Injectable()
export class UploadService {
    constructor(
        private cloudinaryService: CloudinaryService,
        private fileService: FileService,
        private mediaService: MediaService
    ) {
    }

    async addMedia(file: Express.Multer.File): Promise<Media> {
        const response = await this.cloudinaryService.upload(file, PlatformConfig.fileUpload.mediaSubfolder)
        return this.mediaService.createOne({
            name: response.original_filename,
            mimetype: file.mimetype,
            refId: response.public_id,
            url: response.url,
            secureUrl: response.secure_url
        })
    }

    async addMediaByBuffer(buffer: Buffer, mimetype: string): Promise<Media> {
        const response = await this.cloudinaryService.uploadByBuffer(buffer, mimetype, PlatformConfig.fileUpload.mediaSubfolder)
        return this.fileService.createOne({
            name: response.original_filename,
            mimetype: mimetype,
            refId: response.public_id,
            url: response.url,
            secureUrl: response.secure_url
        })
    }

    async addFile(file: Express.Multer.File): Promise<File> {
        const response = await this.cloudinaryService.upload(file, PlatformConfig.fileUpload.fileSubfolder)
        return this.fileService.createOne({
            name: response.original_filename,
            mimetype: file.mimetype,
            refId: response.public_id,
            url: response.url,
            secureUrl: response.secure_url
        })
    }
}
