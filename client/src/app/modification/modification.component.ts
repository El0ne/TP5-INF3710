import { Component, OnInit } from "@angular/core";
import { DoctorService } from "@app/services/doctor.service";
import { Doctor } from "@common/doctor";

@Component({
  selector: "app-modification",
  templateUrl: "./modification.component.html",
  styleUrls: ["./modification.component.css"],
})
export class ModificationComponent implements OnInit {
  doctor: Doctor = {
    idmedecin: -1,
    prenom: "tt",
    nom: "",
    specialite: "",
    anneesexperience: -1,
    idservice: -1,
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

  isIdSelected: boolean = false;
  ids: number[];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getExistingDoctorIds().subscribe((ids) => {
      this.ids = ids;
    });
  }

  selectDoctor(id: number): void {
    this.doctorService.getDoctor(id).subscribe((doctor) => {
      console.log("Données du médecin récupérées:", doctor);
      this.doctor = doctor;
    });
    this.isIdSelected = true;
  }

  onSubmit(): void {
    this.doctorService.updateDoctor(this.doctor).subscribe();
  }
}
