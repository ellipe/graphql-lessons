import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  providers: [StudentService, StudentResolver],
  imports: [TypeOrmModule.forFeature([StudentEntity])],
})
export class StudentModule {}
