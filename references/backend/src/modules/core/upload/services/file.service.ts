import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { File } from '../entities/file.entity';

@Injectable()
export class FileService {
    constructor(
        @InjectRepository(File) private readonly repo: Repository<File>
    ) {
    }

    createOne(data: Partial<File>): Promise<File> {
        const file = this.repo.create(data)
        return this.repo.save(file)
    }

    getByIds(ids: string[]): Promise<File[]> {
        return this.repo.findBy({ id: In(ids) })
    }
}
