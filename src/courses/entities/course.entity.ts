import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Tag } from './tag.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Tag, (tag) => tag.courses, {
    cascade: true,
  })
  @JoinTable()
  tags: Tag[];
}

/* 
  JoinTable: só é  usado no lado proprietário da tabela. Em nosso
  caso, a tabela 'cousers' irá receber dados da tabela 'tags'.

  Cascade: tbm fica na lado proprietário, pois com ele já podemos
  enviar uma requisição com os valores de outra tabela.

*/
