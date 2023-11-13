import { Container } from "inversify";
import { Application } from "./app";
import { DoctorController } from "./controllers/doctor.controller";
import { Server } from "./server";
import { DatabaseService } from "./services/database.service";
import Types from "./types";

const container: Container = new Container();

container.bind(Types.Server).to(Server);
container.bind(Types.Application).to(Application);

container.bind(Types.DatabaseService).to(DatabaseService).inSingletonScope();
container.bind(Types.DoctorController).to(DoctorController);

export { container };
