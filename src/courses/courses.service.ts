import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll() {
    return this.courseRepository.find();
  }

  findOne(id: string) {
    const course = this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);

    return this.courseRepository.save(course);
  }

  async pdate(id: string, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.preload({
      id: +id,
      ...updateCourseDto,
    });

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return course;
  }

  async remove(id: string) {
    const course = await this.courseRepository.findOne(id);

    if (!course) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.courseRepository.remove(course);
  }
}

/* 
  Tratando Exceções:
  usar " throw new HttpException" que recebe dois parametros.
  A mensagem a ser exibida e o status, que pode ser direto o numero ou
  ou os metodos que vem no Nest
     throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND );
*/
