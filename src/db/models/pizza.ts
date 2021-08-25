import { Table, Column, Model, AutoIncrement, PrimaryKey, Unique, BelongsToMany } from 'sequelize-typescript'
import Ingredient from './ingredient';
import PizzaIngredient from './pizza-ingredient';

@Table({ timestamps: false, tableName: 'pizza' })
export default class Pizza extends Model {
	@PrimaryKey
	@AutoIncrement
	@Unique
	@Column
	id!: number;

	@Column
	name!: string

	@Column
	price!: number

	@BelongsToMany(() => Ingredient, () => PizzaIngredient)
	ingredients?: Ingredient[] | null
}

