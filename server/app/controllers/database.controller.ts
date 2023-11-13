import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class DatabaseController {
	public constructor() {}

	public get router(): Router {
		const router: Router = Router();
		return router;
	}

	static getId = (req, res) => {
		res.send("10");
	};
}
