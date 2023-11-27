import { injectable } from "inversify";
// import { Doctor } from "@common/doctor"; can't use it. App crash for some reasons. added it to tsconfig too

@injectable()
export class DoctorController {
	static getDoctorFromID = (req, res) => {
		
		for (const doctor of DoctorController.DOCTOR_LIST) {
			if (doctor.id == req.params.id) {
				res.send(doctor);
				return;
			}
		}
	};

	static createDoctor = (req, res) => {
		for (const doctor of DoctorController.DOCTOR_LIST) {
			if (doctor.id == req.body.id) {
				res.status(400);
				res.send(req.body);
				return;
			}
		}
		DoctorController.DOCTOR_LIST = [...DoctorController.DOCTOR_LIST, req.body];
		res.send(req.body);
	};

	static updateDoctor = (req, res) => {
		const doctorIndex = DoctorController.DOCTOR_LIST.findIndex(
			(doctor) => doctor.id == parseInt(req.body.id)
		);
		DoctorController.DOCTOR_LIST[doctorIndex] = req.body;
		res.send(req.body);
	};

	static getDoctors = (req, res) => {
		res.send({ doctors: DoctorController.DOCTOR_LIST });
	};

	static getAvailableDoctorId = (req, res) => {
		res.send(String(Math.round(Math.random() * 99999999)));
	};

	static deleteDoctor = (req, res) => {
		const doctorIndex = DoctorController.DOCTOR_LIST.findIndex(doc => doc.id === parseInt(req.params.id));
    	if (doctorIndex > -1) {
        	DoctorController.DOCTOR_LIST.splice(doctorIndex, 1);
        res.status(200).send({ message: 'Doctor deleted successfully' });
    	} else {
        	res.status(404).send({ message: 'Doctor not found' });
    	}
	}
	
	static getExistingDoctorsIds = (req, res) => {
		console.log('hey');
		const ids = DoctorController.DOCTOR_LIST.map(doctor => doctor.id);
		console.log('ids : ', ids);
    	res.send(ids);
	}

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
