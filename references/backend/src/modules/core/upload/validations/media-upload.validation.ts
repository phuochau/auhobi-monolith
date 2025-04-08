
import { PipeTransform, Injectable, ArgumentMetadata, UnsupportedMediaTypeException, PayloadTooLargeException } from '@nestjs/common';
import { PlatformConfig } from 'src/config/platform.config';

@Injectable()
export class MediaUploadValidationPipe implements PipeTransform {
  transform(file: Express.Multer.File, metadata: ArgumentMetadata) {
    if (file.size > PlatformConfig.fileUpload.maxSize) {
      throw new PayloadTooLargeException()
    }

    if (!PlatformConfig.fileUpload.mediaMimeTypes.includes(file.mimetype)) {
      throw new UnsupportedMediaTypeException()
    }

    return file
  }
}