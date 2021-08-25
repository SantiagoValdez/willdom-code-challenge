import { Table, Column, Model, AutoIncrement, PrimaryKey, Unique } from 'sequelize-typescript'

@Table({ timestamps: false, tableName: 'ingredient' })
export default class Ingredient extends Model {
	@PrimaryKey
	@AutoIncrement
	@Unique
	@Column
	id!: number;

	@Column
	name!: string
}

