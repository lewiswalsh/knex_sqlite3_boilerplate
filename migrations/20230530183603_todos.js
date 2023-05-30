exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('todos', (table) => {
    table.increments(); // Creates an incrementing ID
    table.string('tasks'); // text column
    table.integer('urgent'); // number column
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('todos')
}
