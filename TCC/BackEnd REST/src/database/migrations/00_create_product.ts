import Knex from 'knex';

exports.up = function(knex: Knex) {
  return knex.schema.createTable('Produto', function(table){
      table.increments('Id_Produto').primary();
      table.string('Nome').notNullable();
      table.string('Descricao').notNullable();
      table.string('ImageUrl').notNullable();
      table.dateTime('DataCadastro').notNullable();
  })
};

exports.down = function(knex: Knex) {
  return knex.schema.dropTable('Produto');
};
