import { Field, ID, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(3)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;
}

@InputType()
export class AssingStudentsToLessonInput {
  @Field(() => ID)
  lessonId: string;

  @Field(() => [ID])
  studentIds: string[];
}
