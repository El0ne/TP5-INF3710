import { injectable } from "inversify";
// import { Doctor } from "@common/doctor"; can't use it. App crash for some reasons. added it to tsconfig too

@injectable()
export class DoctorController {
	static getDoctors = (req, res) => {
		res.send({ doctors: DoctorController.DOCTOR_LIST });
	};

	static getAvailableDoctorId = (req, res) => {
		res.send("10");
	};

	static DOCTOR_LIST: Doctor[] = [
		{
			id: 999,
			firstName: "Joe",
			lastName: "Trout",
			specialization: "Neuro",
			yoe: 11,
			serviceId: 1,
		},
		{
			id: 1,
			firstName: "Joe",
			lastName: "Trout",
			specialization: "Neuro",
			yoe: 11,
			serviceId: 1,
		},
		{
			id: 4,
			firstName: "Bobby",
			lastName: "Trout",
			specialization: "Neuro",
			yoe: 11,
			serviceId: 1,
		},
		{
			id: 2,
			firstName: "Joe",
			lastName: "Trout",
			specialization: "Neuro",
			yoe: 11,
			serviceId: 1,
		},
	];
}

export interface Doctor {
	id: number;
	firstName: string;
	lastName: string;
	specialization: string;
	yoe: number;
	serviceId: number;
}
