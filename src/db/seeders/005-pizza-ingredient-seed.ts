import { QueryInterface } from "sequelize";
export = {
	up: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkInsert('pizza-ingredient', [
			{
				id: 1,
				ingredient: 1,
				pizza: 1,

			}, {
				id: 2,
				ingredient: 1,
				pizza: 2,

			}, {
				id: 3,
				ingredient: 1,
				pizza: 3,

			}, {
				id: 4,
				ingredient: 1,
				pizza: 4,

			}, {
				id: 5,
				ingredient: 2,
				pizza: 1,
			}, {
				id: 6,
				ingredient: 3,
				pizza: 2,
			}, {
				id: 7,
				ingredient: 4,
				pizza: 3,
			}, {
				id: 8,
				ingredient: 4,
				pizza: 4,
			}, {
				id: 9,
				ingredient: 5,
				pizza: 4,
			},

		]);
	},
	down: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkDelete('pizza-ingredient', {}, {});
	}
}