# Create a barebones SQLite3 & Knex app

Paraphrashed from [EstebanBorai's gist](https://gist.github.com/EstebanBorai/49f4501aa23dd666ae57b32bafeb768c).

## Initialise the application

```bash
npm init -y
npm i -s knex sqlite3
npx knex init
```
Modify `knexfile.js` to suit.

## Create and apply the schema

Now make the migration information.
```bash
npx knex migrate:make todos
```
Where `todos` is the table name

This will create the migrations file, for example:
`migrations/20230530190615_todos.js`

Example migrations file:
```javascript
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
```

Now run migrate:latest to apply the schema
```bash
npx knex migrate:latest
```

## Add some seed data to get going

Create a seed file
```bash
npx knex seed:make todos-data
```

Now edit the seed file:
```javascript
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(() => {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, tasks: 'Go get coffee'},
        {id: 2, tasks: 'Go to the gym'},
        {id: 3, tasks: 'Go to EDA'}
      ]);
    });
};
```

Now apply the seed data to the database:
```bash
npx knex seed:run
```

## Use the database in Node
```javascript
const knex = require('knex');
const config = require('./knexfile');

const DB = knex(config.development);

// run a query...
const todos = await DB('todos');
console.log(todos);

```

## Future migrations
To apply later changes, such as new columns, modifying columns, or dropping columns, just create a new migration with the table name. The date-stamped file created will be treated as `latest`
```bash
npx knex migrate:make todos
```

## Reset everything

Never do this is production, but when testing we can reset everything:
```bash
rm dev.sqlite3
npx knex migrate:latest
npx knex seed:run
```

