import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { DoctorComponent } from "../doctor/doctor.component";
import { InsertComponent } from "../insert/insert.component";
import { ModificationComponent } from "@app/modification/modification.component";
import { SuppressionComponent } from "@app/suppression/suppression.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "doctor", component: DoctorComponent },
  { path: "insert", component: InsertComponent },
  { path: "modification", component: ModificationComponent },
  { path: "suppression", component: SuppressionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
