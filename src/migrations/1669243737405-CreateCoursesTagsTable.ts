import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoursesTagsTable1669243737405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses_tags',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses_tags');
  }
}

//Outra forma de gerar o id, é já passando seu tipo uuid por aqui.
//Aqui nao vamos criar uma entity para a tabela pivor, iremos gerar direto pela
// migrations.
// Info adicional, podemos passar a propriedade isUnique: true, para quando tivermos um
// email, por exemplo.

// default: 'uuid_generate_v4()', serve para informamos ao Postgres, para que ele execute essa função
// sempre que um registr é criado

// Importante, essa é a tabela pivô, nela vão os Ids das tebelas de referencia. Por questão de
// didática, iremos criar mais duas migrações só para inserir os IDs na tabela courses_tags
// para mostra as varias funcionalidadedes da migraçoes (Alterar nome da coluna, adicionar ou excluir coluna, criar tabela...)
