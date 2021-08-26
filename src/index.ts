import express, { Application } from 'express';
import routes from './api/routes';
import { errorHandler } from './api/middleware';
import { initDB } from './db/init';
const app: Application = express();
const PORT = process.env.PORT || 9000;

initDB();

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

app.listen(PORT, (): void => {
	console.log(`Server Running here 👉 http://localhost:${PORT}`);
});