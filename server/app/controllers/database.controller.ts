import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class DatabaseController {
	public constructor() {}

	public get router(): Router {
		const router: Router = Router();
		return router;
	}

	getId(): number {
		console.log("r");
		return 346;
	}

	test(): void {
		console.log("erg");
	}
}
