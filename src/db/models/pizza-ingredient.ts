import { Table, Column, Model, AutoIncrement, PrimaryKey, Unique, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Ingredient from './ingredient';
import Pizza from './pizza';

@Table({ timestamps: false, tableName: 'pizza-ingredient' })
export default class PizzaIngredient extends Model {
	@PrimaryKey
	@AutoIncrement
	@Unique
	@Column
	id!: number;

	@ForeignKey(() => Pizza)
	@Column({ field: 'pizza' })
	pizzaId!: number

	@ForeignKey(() => Ingredient)
	@Column({ field: 'ingredient' })
	orderId!: number

	@BelongsTo(() => Pizza)
	pizza!: Pizza

	@BelongsTo(() => Ingredient)
	ingredient!: Ingredient
}