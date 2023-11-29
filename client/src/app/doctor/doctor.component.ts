import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DoctorService } from "../services/doctor.service";
import { Doctor } from "@common/doctor";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.css"],
})
export class DoctorComponent implements OnInit {
  displayedColumns = [
    "idmedecin",
    "prenom",
    "nom",
    "specialite",
    "anneesexperience",
    "idservice",
  ];
  dataSource = new MatTableDataSource<Doctor>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctorList) => {
      this.dataSource.data = doctorList;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
