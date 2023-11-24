import { DoctorController } from "../controllers/doctor.controller";
import * as express from "express";

const doctorRouter = express.Router();

doctorRouter.get("/:id", DoctorController.getDoctorFromID);
doctorRouter.get("/available", DoctorController.getAvailableDoctorId);
doctorRouter.get("/", DoctorController.getDoctors);
doctorRouter.post("/", DoctorController.createDoctor);

export default doctorRouter;
