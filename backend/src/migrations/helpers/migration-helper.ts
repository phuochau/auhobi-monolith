import { CloudinaryResponse } from "../../modules/core/upload/types/cloudinary-response"
import { QueryRunner } from "typeorm"
import { File } from "../../modules/core/upload/entities/file.entity";
import _ from "lodash";
import fs from 'fs'
import { MimeUtil } from "../../lib/mime";
import { CloudinaryService } from "../../modules/core/upload/services/cloudinary.service";

export namespace MigrationHelpers {
    const cloudService = new CloudinaryService()
    
    export const saveFile = async (queryRunner: QueryRunner, mimetype: string, response: CloudinaryResponse): Promise<File> => {
        const repo = queryRunner.manager.getRepository<File>(File)
        return repo.insert({
            name: response.original_filename,
            mimetype,
            refId: response.public_id,
            url: response.url,
            secureUrl: response.secure_url
        }).then(item => _.get(item, 'raw[0]'))
    }

    export const uploadFile = async(queryRunner: QueryRunner, localImagePath: string, remoteSubFolder: string, filenameOverride?: string): Promise<File> => {
        const buffer = fs.readFileSync(localImagePath, null)
        const mimeType = await MimeUtil.getMimeType(localImagePath)
        const response = await cloudService.uploadByBuffer(buffer, mimeType, remoteSubFolder, {
            overwrite: filenameOverride?.length > 0,
            filename_override: filenameOverride ? `${filenameOverride}.${await MimeUtil.getExtension(mimeType)}` : undefined,
            use_filename: filenameOverride?.length > 0
        })
        return saveFile(queryRunner, mimeType, response)
    }
}