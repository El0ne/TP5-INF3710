import { DoctorController } from "../controllers/doctor.controller";
import * as express from "express";

const doctorRouter = express.Router();

doctorRouter.get("/", DoctorController.getAvailableDocId);

export default doctorRouter;
