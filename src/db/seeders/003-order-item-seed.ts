import { QueryInterface } from "sequelize";
export = {
	up: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkInsert('order-item', [{
			id: 1,
			order: 1,
			pizza: 1,
			quantity: 1,

		}, {
			id: 2,
			order: 1,
			pizza: 2,
			quantity: 1,
		}, {
			id: 3,
			order: 2,
			pizza: 3,
			quantity: 4,
		}, {
			id: 4,
			order: 3,
			pizza: 2,
			quantity: 2,
		}, {
			id: 5,
			order: 3,
			pizza: 3,
			quantity: 2,
		},
		{
			id: 6,
			order: 3,
			pizza: 4,
			quantity: 1,
		}
		]);
	},
	down: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkDelete('order-item', {}, {});
	}
}