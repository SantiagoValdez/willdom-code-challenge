import Ingredient from "../db/models/ingredient";
import Order from "../db/models/order";
import OrderItem from "../db/models/order-item";
import Pizza from "../db/models/pizza";


export const getAllPizzas = async (): Promise<Pizza[] | null> => {
	const pizzas = await Pizza.findAll({ include: [{ model: Ingredient, attributes: ['name'], through: { attributes: [] } }] });
	return pizzas;
}

export const getAllOrders = async (): Promise<Order[] | null> => {
	const orders = await Order.findAll();
	return orders;
}

export const getOrderById = async (id: number): Promise<Order | null> => {
	const order = await Order.findByPk(id, { include: [{ model: OrderItem, include: [{ model: Pizza, as: 'pizza' }], as: 'orderItems', attributes: ['id', 'quantity'] }] });
	if (order == null) {
		throw new Error('Order not found');
	}

	return order;
}

