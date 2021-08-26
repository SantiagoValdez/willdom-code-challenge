import { Router } from "express";
import { getAllOrders, getAllPizzas, getOrderById } from "./controller";
import HttpError from "./error";

const routes = Router();

routes.get("/", async (_request, response) => {
	return response.json({ message: "Hello World" });
});

routes.get("/orders/", async (_request, response, next) => {
	try {
		const orders = await getAllOrders();
		return response.json(orders);
	} catch (error) {
		next(error);
	}
});

routes.get("/orders/:id", async (request, response, next) => {
	try {
		const id = Number(request.params.id);
		if (!id) {
			throw new HttpError(400, "Invalid ID");
		}
		const order = await getOrderById(id);
		if (order == null) {
			throw new HttpError(404, "Order not found");
		}
		return response.json(order);
	} catch (error) {
		next(error);
	}
});

routes.get("/pizzas/", async (_request, response, next) => {
	try {
		const pizzas = await getAllPizzas();
		return response.json(pizzas);
	} catch (error) {
		next(error);
	}
});

export default routes;