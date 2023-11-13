import { injectable } from "inversify";

@injectable()
export class DoctorController {
	static getAvailableDoctorId = (req, res) => {
		res.send("10");
	};
}
