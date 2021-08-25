import { QueryInterface, DataTypes } from "sequelize";


export = {
	up: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.createTable("order", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.BIGINT
			},
			createdAt: {
				allowNull: true,
				type: DataTypes.DATE,
				field: "created_at",
				defaultValue: DataTypes.NOW
			},
		});
	},
	down: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.dropTable("order");
	}
};