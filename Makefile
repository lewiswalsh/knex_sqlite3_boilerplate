# Usage: make migrate-make table=todos
migrate-make:
	npx knex migrate:make $(table)

# Usage: make migrate-latest
migrate-latest:
	npx knex migrate:latest

# Usage: make seed-make file=todos-data
seed-make:
	npx knex seed:make $(file)

# Usage: make seed-runall
seed-runall:
	npx knex seed:run

# Usage@ make seed-file file=todos-data.js
seed-file:
	npx knex seed:run --specific=$(file)
