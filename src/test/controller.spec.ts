/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Sequelize } from "sequelize-typescript";
import { getAllOrders, getAllPizzas, getOrderById } from "../api/controller";
import configFile from "../config.json";
import Pizza from "../db/models/pizza";
import OrderItem from "../db/models/order-item";
import Order from "../db/models/order";
import PizzaIngredient from "../db/models/pizza-ingredient";
import Ingredient from "../db/models/ingredient";
describe('Testing', () => {
	let mockedSequelize: Sequelize;

	beforeAll(async () => {
		const config = (<any>configFile)['test'];
		mockedSequelize = new Sequelize({
			...config,
			models: [Pizza, Order, OrderItem, Ingredient, PizzaIngredient]
		});

		await mockedSequelize.sync({ force: true });
		const pizza = Pizza.build({ name: 'Pizza1', price: 10 });
		await pizza.save();

		const order = new Order({ createdAt: new Date() });
		await order.save();

		const orderItem = new OrderItem({ orderId: order.get().id, pizzaId: pizza.get().id, quantity: 1 });
		await orderItem.save();

	})

	afterAll(async () => {
		jest.clearAllMocks();
		await mockedSequelize.close();
	})

	test('Get list of pizzas', async () => {
		const pizzas = await getAllPizzas();
		expect(pizzas).toHaveLength(1);
		expect(pizzas?.[0]).toHaveProperty('name', 'Pizza1');
		expect(pizzas?.[0]).toHaveProperty('price', 10);
	});

	test('Get list of orders', async () => {
		const orders = await getAllOrders();
		expect(orders).toHaveLength(1);
	});

	test('Get order details', async () => {
		const orders = await getAllOrders();
		const orderId = orders![0].id;
		const order = (await getOrderById(orderId))!.get({ plain: true });
		expect(order).toHaveProperty('id');
		expect(order).toHaveProperty('createdAt');
		expect(order).toHaveProperty('orderItems');
		const orderItem = order!.orderItems[0];
		expect(orderItem).toHaveProperty('quantity');
		expect(orderItem.pizza).toHaveProperty('name', 'Pizza1');
	});
});