import { DoctorController } from "../controllers/doctor.controller";
import * as express from "express";

const doctorRouter = express.Router();

doctorRouter.get("/", DoctorController.getAvailableDoctorId);

export default doctorRouter;
