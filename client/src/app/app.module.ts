import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from "./modules/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DoctorComponent } from "./doctor/doctor.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { InsertComponent } from "./insert/insert.component";
import { ModalComponent } from './modal/modal.component';
import { ModificationComponent } from './modification/modification.component';
import { SuppressionComponent } from './suppression/suppression.component';

@NgModule({
  declarations: [AppComponent, DoctorComponent, InsertComponent, ModalComponent, ModificationComponent, SuppressionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
