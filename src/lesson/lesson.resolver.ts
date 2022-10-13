import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StudentService } from 'src/student/student.service';
import { StudentType } from 'src/student/student.type';
import { LessonEntity } from './lesson.entity';
import { AssingStudentsToLessonInput, CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(() => LessonType, { nullable: true })
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType], { nullable: 'items' })
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LessonType)
  createLesson(@Args('CreateLessonInput') input: CreateLessonInput) {
    return this.lessonService.createLesson(input);
  }

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args('AssingStudentsToLessonInput') input: AssingStudentsToLessonInput,
  ) {
    return this.lessonService.assignStudentsToLesson(input);
  }

  @ResolveField('students', () => StudentType)
  async students(@Parent() lesson: LessonType) {
    // this should be a dataloader.
    return this.studentService.getStudentsByIds(lesson.students);
  }
}
