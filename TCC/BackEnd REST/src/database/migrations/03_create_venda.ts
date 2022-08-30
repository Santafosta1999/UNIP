import Knex from 'knex';

exports.up = function(knex: Knex) {
    return knex.schema.createTable('Venda', function(table){
        table.increments('Id_Venda').primary();
        table.dateTime('DataVenda').notNullable();
    })
};

exports.down = function(knex: Knex) {
    return knex.schema.dropTable('Venda');
};
