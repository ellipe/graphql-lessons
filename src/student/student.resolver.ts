import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => StudentType, { nullable: true })
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query(() => [StudentType], { nullable: 'items' })
  students() {
    return this.studentService.getStudents();
  }

  @Mutation(() => StudentType)
  createStudent(@Args('CreateStudentInput') input: CreateStudentInput) {
    return this.studentService.createStudent(input);
  }
}
