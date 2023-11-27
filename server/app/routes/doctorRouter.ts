import { DoctorController } from "../controllers/doctor.controller";
import * as express from "express";

const doctorRouter = express.Router();

doctorRouter.get("/available", DoctorController.getAvailableDoctorId);
doctorRouter.get("/ids", DoctorController.getExistingDoctorsIds);
doctorRouter.get("/:id", DoctorController.getDoctorFromID);
doctorRouter.get("/", DoctorController.getDoctors);
doctorRouter.post("/", DoctorController.createDoctor);
doctorRouter.put("/:id", DoctorController.updateDoctor);
doctorRouter.delete("/:id", DoctorController.deleteDoctor);

export default doctorRouter;
