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
    this.doctorService.getDoctors().subscribe((data) => {
      this.doctors = data.doctors;
    });
  }

  onDelete(): void {
    console.log(this.selectedDoctorId);
    console.log("URL: ", URL);
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
