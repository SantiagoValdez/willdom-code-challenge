import { QueryInterface } from "sequelize";
export = {
	up: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkInsert('pizza', [{
			id: 1,
			name: 'Hawaiian',
			price: 12.99,
		}, {
			id: 2,
			name: 'Pepperoni',
			price: 6,
		}, {
			id: 3,
			name: 'Margherita',
			price: 5,
		}, {
			id: 4,
			name: 'Neapolitan',
			price: 6,
		}]);
	},
	down: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkDelete('pizza', {}, {});
	}
}