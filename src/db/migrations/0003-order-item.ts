import { QueryInterface, DataTypes } from "sequelize";


export = {
	up: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.createTable("order-item", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.BIGINT
			},
			order: {
				allowNull: false,
				type: DataTypes.BIGINT,
				references: {
					model: "order",
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
			},
			quantity: {
				allowNull: false,
				type: DataTypes.INTEGER,
				defaultValue: 1
			},
		});
	},
	down: (queryInterface: QueryInterface): Promise<void> => {
		return queryInterface.dropTable("order-item");
	}
};