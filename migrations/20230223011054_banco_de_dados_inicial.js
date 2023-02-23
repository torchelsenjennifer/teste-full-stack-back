export function up(knex) {
    return knex.schema
      .createTable('categoria', function (table) {
          table.increments('id');
          table.string('nome', 50).notNullable();
      })
      .createTable('produto', function (table) {
          table.increments('id');
          table.integer('categoria_id', 10).notNullable();
          table.string('nome', 50).notNullable();
          table.string('descricao',50).notNullable();
          table.decimal('preco', 10,2).notNullable();
          table.string('foto',255).notNullable();
          table.foreign('categoria_id').references('categoria.id');
      });
      
  }
  
  export function down(knex) {
    return knex.schema
        .dropTable("produto")
        .dropTable("categoria");
  }