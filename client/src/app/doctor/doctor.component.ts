import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { DoctorService } from "../services/doctor.service";

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
    // this.doctorService.getDoctors().subscribe((doctors: Doctor[]) => {
    //   this.doctors = doctors;
    // });
    this.doctors = this.doctorService.getDoctors();
    this.dataSource = new MatTableDataSource<Doctor>(this.doctors);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  specialization: string;
  yoe: number;
  serviceId: number;
}
