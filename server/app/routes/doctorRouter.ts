import { DoctorController } from "../controllers/doctor.controller";
import * as express from "express";

const doctorRouter = express.Router();

doctorRouter.get("/available", DoctorController.getAvailableDoctorId); //done
doctorRouter.get("/ids", DoctorController.getExistingDoctorsIds); //done
doctorRouter.get("/:id", DoctorController.getDoctorFromID); //done
doctorRouter.get("/", DoctorController.getDoctors); //done
doctorRouter.post("/", DoctorController.createDoctor); //done
doctorRouter.put("/:id", DoctorController.updateDoctor);
doctorRouter.delete("/:id", DoctorController.deleteDoctor);

export default doctorRouter;
