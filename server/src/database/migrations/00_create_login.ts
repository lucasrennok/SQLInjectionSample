import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('login', table => {
        table.increments('id').primary();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('login');
}