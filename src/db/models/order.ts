import { Table, Column, Model, AutoIncrement, PrimaryKey, Unique, HasMany } from 'sequelize-typescript'
import OrderItem from './order-item';

@Table({ timestamps: false, tableName: 'order' })
export default class Order extends Model {
	@PrimaryKey
	@AutoIncrement
	@Unique
	@Column
	id!: number;

	@Column({ field: 'created_at' })
	createdAt!: Date;

	@HasMany(() => OrderItem)
	orderItems!: OrderItem[]
}