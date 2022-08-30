
exports.up = function(knex) {
  return knex.schema.createTable('Produto', function(table){
      table.increments('Id_Produto').primary();
      table.string('Nome').notNullable();
      table.string('Descricao').notNullable();
      table.string('ImageUrl').notNullable();
      table.datetime('DataCadastro').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Produto');
};
