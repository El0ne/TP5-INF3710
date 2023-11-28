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
		this.router.get("/available", async (req: Request, res: Response) => {
			res.send(String(Math.round(Math.random() * 99999999)));
		});

		this.router.get("/ids", async (req: Request, res: Response) => {
			this.databaseService.pool
				.query("SELECT * FROM public.medecins")
				.then((response) => {
					const ids = response.rows.map((doctor) => doctor.idmedecin);
					res.send(ids);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});

		this.router.get("/:id", async (req: Request, res: Response) => {
			const sqlQuery = "SELECT * FROM public.medecins m WHERE m.idMedecin = $1";
			this.databaseService.pool
				.query({
					text: sqlQuery,
					values: [req.params.id],
				})
				.then((response) => {
					res.send(response.rows);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});

		this.router.get("/", async (req: Request, res: Response) => {
			this.databaseService.pool
				.query("SELECT * FROM public.medecins")
				.then((response) => {
					res.send(response.rows);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});

		this.router.post("/", (req: Request, res: Response) => {
			const doctor: Doctor = req.body;
			const sqlQuery = `INSERT INTO public.medecins(idMedecin, prenom, nom, specialite, anneesExperience, idService) 
                              VALUES ($1, $2, $3, $4, $5, $6)`;
			this.databaseService.pool
				.query(sqlQuery, [
					doctor.id,
					doctor.firstName,
					doctor.lastName,
					doctor.specialization,
					doctor.yoe,
					doctor.serviceId,
				])
				.then(() => {
					res.send(doctor);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});

		this.router.put("/", (req: Request, res: Response) => {
			const doctor: Doctor = req.body;
			this.databaseService.pool
				.query(
					`UPDATE public.medecins m 
                    SET prenom = $2, nom = $3, specialite = $4, anneesExperience = $5, idService = $6
                    WHERE m.idMedecin = $1`,
					[
						doctor.id,
						doctor.firstName,
						doctor.lastName,
						doctor.specialization,
						doctor.yoe,
						doctor.serviceId,
					]
				)
				.then(() => {
					res.send(doctor);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});

		this.router.delete("/:id", async (req: Request, res: Response) => {
			const sqlQuery = `DELETE FROM public.medecins WHERE idMedecin = $1`;
			this.databaseService.pool
				.query({
					text: sqlQuery,
					values: [req.params.id],
				})
				.then(() => {
					res.send([]);
				})
				.catch((error) => console.error("Error executing query", error.stack));
		});
	}
}

export interface Doctor {
	id: number;
	firstName: string;
	lastName: string;
	specialization: string;
	yoe: number;
	serviceId: number;
}
