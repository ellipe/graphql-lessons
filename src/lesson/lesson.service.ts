import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { AssingStudentsToLessonInput, CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLesson(id: string) {
    return this.lessonRepository.findOneBy({ id });
  }

  async getLessons() {
    return this.lessonRepository.find();
  }

  async createLesson(input: CreateLessonInput) {
    const lesson = this.lessonRepository.create(input);
    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(input: AssingStudentsToLessonInput) {
    const { lessonId, studentIds } = input;
    const lesson = await this.getLesson(lessonId);
    if (!lesson) throw new NotFoundException('Lesson not found');
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
