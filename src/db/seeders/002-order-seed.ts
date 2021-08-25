import { QueryInterface } from "sequelize";
export = {
	up: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkInsert('order', [{
			id: 1,
			created_at: new Date(),
		}, {
			id: 2,
			created_at: new Date(),
		}, {
			id: 3,
			created_at: new Date(),
		}]);
	},
	down: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkDelete('order', {}, {});
	}
}