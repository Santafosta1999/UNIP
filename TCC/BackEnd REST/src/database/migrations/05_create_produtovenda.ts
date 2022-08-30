import Knex from 'knex';

exports.up = function(knex: Knex) {
    return knex.schema.createTable('ProdutoVenda', function(table){
        table.integer('Id_Venda').notNullable();
        table.integer('Id_Produto').notNullable();
        table.integer('Id_Vendedor').notNullable();
        table.integer('Id_Promocao');
        table.integer('Quantidade').notNullable();

        table.foreign('Id_Venda').references('Id_Venda').inTable('Venda');
        table.foreign('Id_Produto').references('Id_Produto').inTable('Produto');
        table.foreign('Id_Vendedor').references('Id_Vendedor').inTable('Vendedor');
        table.foreign('Id_Promocao').references('Id_Promocao').inTable('ProdutoPromocao');
    })
};

exports.down = function(knex: Knex) {
  return knex.schema.dropTable('ProdutoVenda');
};
