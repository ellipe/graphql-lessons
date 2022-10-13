import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { LessonEntity } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  providers: [LessonResolver, LessonService],
  imports: [TypeOrmModule.forFeature([LessonEntity]), StudentModule],
})
export class LessonModule {}
