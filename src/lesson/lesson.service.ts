import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLesson(id: string) {
    return this.lessonRepository.findOneBy({ id });
  }

  async createLesson(input: CreateLessonInput) {
    const lesson = this.lessonRepository.create(input);
    return this.lessonRepository.save(lesson);
  }
}
