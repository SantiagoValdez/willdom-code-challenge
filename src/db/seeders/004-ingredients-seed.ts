import { QueryInterface } from "sequelize";
export = {
	up: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkInsert('ingredient', [{
			id: 1,
			name: 'mozzarella',

		}, {
			id: 2,
			name: 'pineapple',
		}, {
			id: 3,
			name: 'pepperoni',
		}, {
			id: 4,
			name: 'tomato',
		},
		{
			id: 5,
			name: 'garlic',
		}
		]);
	},
	down: (queryInterface: QueryInterface): Promise<number | unknown> => {
		return queryInterface.bulkDelete('ingredient', {}, {});
	}
}