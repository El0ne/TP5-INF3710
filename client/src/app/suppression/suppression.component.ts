import { Component, OnInit } from "@angular/core";
import { DoctorService } from "../services/doctor.service";
import { Doctor } from "@common/doctor";

@Component({
  selector: "app-suppression",
  templateUrl: "./suppression.component.html",
  styleUrls: ["./suppression.component.css"],
})
export class SuppressionComponent implements OnInit {
  doctors: Doctor[];
  selectedDoctorId: string | null;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((response) => {
      this.doctors = response;
    });
  }

  onDelete(): void {
    if (this.selectedDoctorId) {
      this.doctorService.deleteDoctor(this.selectedDoctorId).subscribe(() => {
        this.doctors = this.doctors.filter(
          (doc) => doc.idmedecin !== Number(this.selectedDoctorId)
        );
        this.selectedDoctorId = null; // Reset the selection
      });
    }
  }
}
