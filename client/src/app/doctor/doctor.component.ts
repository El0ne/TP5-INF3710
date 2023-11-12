import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrls: ["./doctor.component.css"],
})
export class DoctorComponent {
  displayedColumns = [
    "id",
    "first-name",
    "last-name",
    "field",
    "experience",
    "service-id",
  ];
  dataSource = new MatTableDataSource<Doctor>(DOCTOR_LIST);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  field: string;
  yoe: number;
  serviceId: number;
}

export const DOCTOR_LIST: Doctor[] = [
  {
    id: 0,
    firstName: "Joe",
    lastName: "Trout",
    field: "Neuro",
    yoe: 11,
    serviceId: 1,
  },
  {
    id: 1,
    firstName: "Joe",
    lastName: "Trout",
    field: "Neuro",
    yoe: 11,
    serviceId: 1,
  },
  {
    id: 4,
    firstName: "Joe",
    lastName: "Trout",
    field: "Neuro",
    yoe: 11,
    serviceId: 1,
  },
  {
    id: 2,
    firstName: "Joe",
    lastName: "Trout",
    field: "Neuro",
    yoe: 11,
    serviceId: 1,
  },
];
