exports.up = function (knex) {
    return knex.schema.createTable("gasto", function (table) {
        table.increments();
        table.string("nome").notNullable();
        table.string("categoria");
        table.string("user_id").notNullable();
        table.integer("valor").notNullable();
        table.datetime("createdAt").defaultTo(knex.fn.now());
        table.datetime("updatedAt").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("gasto");
};
