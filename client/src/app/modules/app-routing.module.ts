import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "../app.component";
import { DoctorComponent } from "../doctor/doctor.component";
const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "doctor", component: DoctorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
