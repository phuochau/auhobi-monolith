import { Controller, Put, UploadedFile, UseGuards, UseInterceptors,  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { GraphQLGuard } from '../../auth/guards/graphql.guard';
import { MediaUploadValidationPipe } from '../validations/media-upload.validation';
import { UploadService } from '../services/upload.service';
import { FileUploadValidationPipe } from '../validations/file-upload.validation';

@Controller('upload')
@UseGuards(GraphQLGuard)
export class UploadController {

  constructor(private uploadService: UploadService) {
  }
  
  @Put('addMedia')
  @UseInterceptors(FileInterceptor('file'))
  addMedia(@UploadedFile(new MediaUploadValidationPipe()) file: Express.Multer.File) {
    return this.uploadService.addFile(file)
  }
  
  @Put('addFile')
  @UseInterceptors(FileInterceptor('file'))
  addFile(@UploadedFile(new FileUploadValidationPipe()) file: Express.Multer.File) {
    return this.uploadService.addFile(file)
  }
}