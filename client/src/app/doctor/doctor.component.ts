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
    "id",
    "first-name",
    "last-name",
    "field",
    "experience",
    "service-id",
  ];
  dataSource = new MatTableDataSource<Doctor>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  doctors: Doctor[];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((doctorList) => {
      this.dataSource.data = doctorList.doctors;
      console.log(this.dataSource.data[0].specialization);
    });
  }
}
