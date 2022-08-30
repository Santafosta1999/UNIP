import Knex from 'knex';

exports.up = function(knex: Knex) {
    return knex.schema.createTable('Vendedor', function(table) {
        table.increments('Id_Vendedor').primary();
        table.string('RazaoSocial').notNullable();
        table.integer('CNPJ').notNullable();
    });    
};

exports.down = function(knex: Knex) {
    return knex.schema.dropTable('Vendedor');
};
