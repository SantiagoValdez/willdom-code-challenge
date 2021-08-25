import { QueryInterface, DataTypes } from "sequelize";


export = {
	up: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.createTable("pizza", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.BIGINT
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL,
				allowNull: false,
			}
		});
	},
	down: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.dropTable("pizza");
	}
};