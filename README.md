# CODE CHALLENGE

## Getting started

To run this project on your machine please install the dependencies `npm install`, then add a proper database connection configuration on `src/config.json`.
Execute `npm run dev` to start a dev server.

If you want to compile for deployment, run `npm run build`.

## Lint

This project use `eslint`, to run the linter please use `npm run lint`, for fixing `npm run lint:fix` and for ignoring warnings `npm run lint:quiet`.

## Test

For testing you can use `npm run test` to run the jest test, or `npm run test:coverage` to see the code coverage.

## Migrations and seeds

This project use sequelize-cli for managing migrations and seeds.
To run the migrations please use `npx sequelize-cli db:migrate`.
To run the seeds please use `npx sequelize-cli db:seed:all`.

