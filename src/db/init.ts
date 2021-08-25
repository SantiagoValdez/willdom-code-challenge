import { Sequelize } from "sequelize-typescript";
import configFile from "../config.json";
import parseDatabaseUrl from "../utils/parse-database";
const env = process.env.NODE_ENV || "development";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config = (<any>configFile)[env];

export const initDB = (): Sequelize => {
	if (env === "production") {
		const options = parseDatabaseUrl(process.env.DATABASE_URL);
		return new Sequelize({
			dialect: "postgres",
			protocol: "postgres",
			logging: false,
			...options,
			dialectOptions: {
				ssl: {
					require: true,
					rejectUnauthorized: false
				}
			},
			modelPaths: [__dirname + "/models"]
		})
	}

	return new Sequelize({
		...config,
		modelPaths: [__dirname + "/models"],
	})
}
