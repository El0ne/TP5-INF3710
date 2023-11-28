import { Component, OnInit } from '@angular/core';
import { DoctorService } from "../services/doctor.service";
import { Doctor } from "@common/doctor"; 

@Component({
  selector: 'app-suppression',
  templateUrl: './suppression.component.html',
  styleUrls: ['./suppression.component.css']
})

export class SuppressionComponent implements OnInit {
  doctors: Doctor[];
  selectedDoctorId: string | null;;

  constructor(
    private doctorService: DoctorService,

  ) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(
      response => {
        console.log('Response from getDoctors()', response);
        this.doctors = response; 
        // check si la réponse est un tableau
        console.log('Is "doctors" an array?', Array.isArray(this.doctors));
      },
      error => {
        console.error('Error fetching doctors', error);
      }
    );
  }

  onDelete(): void {
    if (this.selectedDoctorId) {
      this.doctorService.deleteDoctor(this.selectedDoctorId).subscribe(() => {
        this.doctors = this.doctors.filter(doc => doc.idmedecin !== Number(this.selectedDoctorId));
        this.selectedDoctorId = null; // Reset the selection
      });
    }
  }

}
