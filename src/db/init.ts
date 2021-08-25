import { Sequelize } from "sequelize-typescript";
import configFile from "../config.json";
const env = process.env.NODE_ENV || "development";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = (<any>configFile)[env];

export const initDB = (): Sequelize => {
	return new Sequelize({
		...config,
		modelPaths: [__dirname + "/models"],
	})
}
