import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary();
        table.string('message').notNullable();
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();

        table.string('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('messagens');
}