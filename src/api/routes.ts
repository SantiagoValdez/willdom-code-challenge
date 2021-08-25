import { Router } from 'express';
import { getAllOrders, getAllPizzas, getOrderById } from './controller';

const routes = Router();

routes.get('/', async (_request, response) => {
	return response.json({ message: 'Hello World' });
});

routes.get('/orders/', async (_request, response) => {
	const pizzas = await getAllOrders();
	return response.json(pizzas);
});

routes.get('/orders/:id', async (request, response) => {
	try {
		const pizzas = await getOrderById(Number(request.params.id));
		return response.json(pizzas);
	} catch (error) {
		console.error(error);
		return response.status(404).json({ error: 'Not Found' });
	}
});

routes.get('/pizzas/', async (_request, response) => {
	const pizzas = await getAllPizzas();
	return response.json(pizzas);
});

export default routes;