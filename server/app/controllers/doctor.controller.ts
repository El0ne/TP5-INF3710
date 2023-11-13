import { injectable } from "inversify";

@injectable()
export class DoctorController {
	static getAvailableDocId = (req, res) => {
		res.send("10");
	};
}
