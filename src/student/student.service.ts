import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async getStudent(id: string) {
    return this.studentRepository.findOneBy({ id });
  }

  async getStudents() {
    return this.studentRepository.find();
  }

  async createStudent(input: CreateStudentInput) {
    const student = this.studentRepository.create(input);
    return this.studentRepository.save(student);
  }
}
