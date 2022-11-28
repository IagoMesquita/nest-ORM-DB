import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCoursesIdToCoursesTagsTable1669249053433
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags',
      new TableColumn({
        name: 'coursesId',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'courses_tags',
      new TableForeignKey({
        name: 'courses_tags_courses',
        columnNames: ['coursesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'courses',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('courses_tags', 'courses_tags_courses');

    await queryRunner.dropColumn('courses_tags', 'coursesId');
  }
}

// isNullable: true, importante colocar pq, se uma migração for executada em um momento que já
// em uma tabela que já existam registros, essa coluna estará sem registro e com essa propriedade
// estou dizendo que são aceitos valores null

//addColumn é apanas para criar a coluna
