/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from "express"
import HttpError from "./error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
	const message = error.message || "Something failed!"
	let status = 500;
	if (error instanceof HttpError) {
		status = (<HttpError>error).status;
	}

	response.status(status).send({ error: message })
}
