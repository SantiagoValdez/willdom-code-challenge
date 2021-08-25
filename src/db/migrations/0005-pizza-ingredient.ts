import { QueryInterface, DataTypes } from "sequelize";


export = {
	up: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.createTable("pizza-ingredient", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.BIGINT
			},
			ingredient: {
				allowNull: false,
				type: DataTypes.BIGINT,
				references: {
					model: "ingredient",
					key: "id"
				}
			},
			pizza: {
				allowNull: false,
				type: DataTypes.BIGINT,
				references: {
					model: "pizza",
					key: "id"
				}
			}
		});
	},
	down: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.dropTable("pizza-ingredient");
	}
};