import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import * as fs from "fs";

@injectable()
export class DatabaseService {
	public connectionConfig: pg.ConnectionConfig = {
		user: "postgres",
		database: "postgres",
		password: "12345",
		port: 5432,
		host: "127.0.0.1",
		keepAlive: true,
	};

	public pool: pg.Pool = new pg.Pool(this.connectionConfig);

	public async createSchema(): Promise<void> {
		const client = await this.pool.connect();
		const sql = fs.readFileSync("../database/bdschema.sql").toString();
		await client.query(sql);
		await this.insertData(client);
		console.log("schema created");
		client.release();
	}

	public async insertData(client: pg.PoolClient) {
		const sql = fs.readFileSync("../database/data.sql").toString();
		await client.query(sql);
	}
}
