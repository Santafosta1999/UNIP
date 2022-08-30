
exports.up = function(knex) {
    return knex.schema.createTable('ProdutoPromocao', function(table){
        table.increments('Id_Promocao').primary();
        table.integer('Id_Produto').notNullable();
        table.integer('Id_Vendedor').notNullable();
        table.decimal('Valor').notNullable();
        table.datetime('DataCadastro').notNullable();
        table.datetime('DataFimPromocao').notNullable();

        table.foreign('Id_Produto').references('Id_Produto').inTable('Produto');
        table.foreign('Id_Vendedor').references('Id_Vendedor').inTable('Vendedor');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ProdutoPromocao');
};
