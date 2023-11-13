import { Component, OnInit } from "@angular/core";
import { DoctorService } from "../services/doctor.service";
import { Doctor } from "@common/doctor";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@app/modal/modal.component";
@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.css"],
})
export class InsertComponent implements OnInit {
  defaultField: string;
  // defaultServiceId: number;

  doctor: Doctor = {
    id: 0,
    firstName: "Default Name",
    lastName: "Default Last Name",
    specialization: "Generalist",
    yoe: 0,
    serviceId: 1, // need a function to get all the available service id
  };
  servicesId: number[];

  constructor(
    private doctorService: DoctorService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.doctorService.getAvailableDoctorId().subscribe((id) => {
      this.doctor.id = Number(id);
    });
    this.servicesId = this.doctorService.getListOfServiceId();
  }

  onSubmit() {
    this.doctorService.addDoctor(this.doctor);
    // open modal if doctor id is not  or we could load all the doctors id on init and not allow them to be entered
    // .subscribe(message)
    // if(message)
    this.openModal("The doctor id is not available. Please try again");
  }
  openModal(message: string) {
    this.matDialog.open(ModalComponent, {
      data: message,
    });
  }
}
