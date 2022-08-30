
exports.up = function(knex) {
    return knex.schema.createTable('Vendedor', function(table) {
        table.increments('Id_Vendedor').primary();
        table.string('RazaoSocial').notNullable();
        table.integer('CNPJ').notNullable();
    });    
};

exports.down = function(knex) {
    return knex.schema.dropTable('Vendedor');
};
