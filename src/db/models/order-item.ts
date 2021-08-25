import { Table, Column, Model, AutoIncrement, PrimaryKey, Unique, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Order from './order';
import Pizza from './pizza';

@Table({ timestamps: false, tableName: 'order-item' })
export default class OrderItem extends Model {
	@PrimaryKey
	@AutoIncrement
	@Unique
	@Column
	id!: number;

	@Column
	quantity!: number

	@ForeignKey(() => Pizza)
	@Column({ field: 'pizza' })
	pizzaId!: number

	@ForeignKey(() => Order)
	@Column({ field: 'order' })
	orderId!: number

	@BelongsTo(() => Pizza)
	pizza!: Pizza

	@BelongsTo(() => Order)
	order!: Order
}