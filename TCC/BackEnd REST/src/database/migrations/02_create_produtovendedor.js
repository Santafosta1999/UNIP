
exports.up = function(knex) {
  return knex.schema.createTable('ProdutoVendedor', function(table){
      table.integer('Id_Vendedor').notNullable();
      table.integer('Id_Produto').notNullable();
      table.integer('Valor').notNullable();

      table.foreign('Id_Produto').references('Id_Produto').inTable('Produto');
      table.foreign('Id_Vendedor').references('Id_Vendedor').inTable('Vendedor');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ProdutoVendedor');
};
