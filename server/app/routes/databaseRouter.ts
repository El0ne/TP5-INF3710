import { DatabaseController } from "../controllers/database.controller";
import * as express from "express";

const databaseRouter = express.Router();

databaseRouter.get("/", DatabaseController.getId);

export default databaseRouter;
