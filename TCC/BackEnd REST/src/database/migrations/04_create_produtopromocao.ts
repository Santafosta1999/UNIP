import Knex from 'knex';

exports.up = function(knex: Knex) {
    return knex.schema.createTable('ProdutoPromocao', function(table){
        table.increments('Id_Promocao').primary();
        table.integer('Id_Produto').notNullable();
        table.integer('Id_Vendedor').notNullable();
        table.decimal('Valor').notNullable();
        table.dateTime('DataCadastro').notNullable();
        table.dateTime('DataFimPromocao').notNullable();

        table.foreign('Id_Produto').references('Id_Produto').inTable('Produto');
        table.foreign('Id_Vendedor').references('Id_Vendedor').inTable('Vendedor');
    })
};

exports.down = function(knex: Knex) {
    return knex.schema.dropTable('ProdutoPromocao');
};
