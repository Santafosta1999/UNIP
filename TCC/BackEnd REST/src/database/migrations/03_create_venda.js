
exports.up = function(knex) {
    return knex.schema.createTable('Venda', function(table){
        table.increments('Id_Venda').primary();
        table.datetime('DataVenda').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Venda');
};
