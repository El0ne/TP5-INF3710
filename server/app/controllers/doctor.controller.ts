import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";
import { Request, Response } from "express";

// import { Doctor } from "@common/doctor"; can't use it. App crash for some reasons. added it to tsconfig too

@injectable()
export class DoctorController {
	router: Router = Router();

	public constructor(
		@inject(Types.DatabaseService)
		private readonly databaseService: DatabaseService
	) {
		this.databaseService.createSchema();
		this.configureRoutes();
	}

	configureRoutes() {
		this.router.get("/", async (req: Request, res: Response) => {
			this.databaseService.pool
				.query("SELECT * FROM public.medecins")
				.then((response) => {
					res.send(response.rows);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});

		this.router.get("/available", async (req: Request, res: Response) => {
			res.send(String(Math.round(Math.random() * 99999999)));
		});

		this.router.post("/", (req, res, _) => {
			const doctor: Doctor = req.body;
			console.log(doctor);
			this.databaseService.pool
				.query(
					`INSERT INTO public.medecins(idMedecin, prenom, nom, specialite, anneesExperience, idService) 
        VALUES ($1, $2, $3, $4, $5, $6)`,
					[
						doctor.id,
						doctor.firstName,
						doctor.lastName,
						doctor.specialization,
						doctor.yoe,
						doctor.serviceId,
					]
				)
				.then((response) => {
					res.send(response.rows);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});
	}

	// TODO convert methods to fetch the db

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
		const doctorIndex = DoctorController.DOCTOR_LIST.findIndex(
			(doc) => doc.id === parseInt(req.params.id)
		);
		if (doctorIndex > -1) {
			DoctorController.DOCTOR_LIST.splice(doctorIndex, 1);
			res.status(200).send({ message: "Doctor deleted successfully" });
		} else {
			res.status(404).send({ message: "Doctor not found" });
		}
	};

	static getExistingDoctorsIds = (req, res) => {
		const ids = DoctorController.DOCTOR_LIST.map((doctor) => doctor.id);
		res.send(ids);
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
