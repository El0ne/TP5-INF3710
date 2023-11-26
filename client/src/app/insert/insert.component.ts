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

  doctor: Doctor = {
    id: 0,
    firstName: "Harry",
    lastName: "Haller",
    specialization: "Psychiatrie",
    yoe: 0,
    serviceId: 3,
  };
  servicesId: number[] = [...Array(10).keys()];
  specializations: string[] = [
    "Dermatologie",
    "Neurologie",
    "Ophtalmologie",
    "Orthopédie",
    "Psychiatrie",
    "Cardiologie",
    "Pédiatrie",
    "Chirurgie",
    "Gynécologie",
    "Radiologie",
  ];

  constructor(
    private doctorService: DoctorService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.doctorService.getAvailableDoctorId().subscribe((id) => {
      this.doctor.id = Number(id);
    });
  }

  onSubmit() {
    console.log(this.doctor);
    this.doctorService.addDoctor(this.doctor).subscribe(
      (res) => {},
      (err) => {
        if (err.status == 400) {
          this.openModal(
            "Les ID pour le médecin est déjà pris. Choisissez en un autre"
          );
        }
      }
    );
  }
  openModal(message: string) {
    this.matDialog.open(ModalComponent, {
      data: message,
    });
  }
}
