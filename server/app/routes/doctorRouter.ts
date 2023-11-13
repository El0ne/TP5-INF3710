import { DoctorController } from "../controllers/doctor.controller";
import * as express from "express";

const doctorRouter = express.Router();

doctorRouter.get("/id", DoctorController.getAvailableDoctorId);
doctorRouter.get("/", DoctorController.getDoctors);

export default doctorRouter;
