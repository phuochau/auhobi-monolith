import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Media } from '../entities/media.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Media) private readonly repo: Repository<Media>
    ) {
    }

    createOne(data: Partial<Media>): Promise<Media> {
        const media = this.repo.create(data)
        return this.repo.save(media)
    }

    getByIds(ids: string[]): Promise<Media[]> {
        return this.repo.findBy({ id: In(ids) })
    }
}
