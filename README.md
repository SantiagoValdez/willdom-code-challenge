# CODE CHALLENGE

## Getting started

To run this project on your machine please install the dependencies with `npm install`, then add a proper database connection configuration on `src/config.json`. To create the database structure please refer to the [migrations and seed](#migrations-and-seeds) section.

Execute `npm run dev` to start a dev server.

If you want to compile for deployment, run `npm run build`.

## Migrations and seeds

This project use `sequelize-cli` for managing migrations and seeds, unfortunately, `sequelize-cli` does not support ts files yet, so please before running a migration or a seed execute `npm run build` to compile the typescript sources to javascript.

To run the migrations please use `npx sequelize-cli db:migrate`.

To run the seeds please use `npx sequelize-cli db:seed:all`.

## Linting

This project use `eslint`, to run the linter please use `npm run lint`, for fixing `npm run lint:fix` and for ignoring warnings `npm run lint:quiet`.

## Testing

For testing you can use `npm run test` to run the jest tests, or `npm run test:coverage` to see the code coverage.