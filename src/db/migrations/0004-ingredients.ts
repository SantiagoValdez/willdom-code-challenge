import { QueryInterface, DataTypes } from "sequelize";


export = {
	up: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.createTable("ingredient", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.BIGINT
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		});
	},
	down: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.dropTable("ingredient");
	}
};