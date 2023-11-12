import { Component, OnInit } from "@angular/core";
// import { NgForm } from "@angular/forms";
import { Doctor } from "../doctor/doctor.component";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.css"],
})
export class InsertComponent implements OnInit {
  // @ViewChild("doctorForm") doctorForm!: NgForm;

  defaultField: string;
  defaultServiceId: number;

  doctor: Doctor = {
    id: 33, // need a function to get next available id
    firstName: "Default Name",
    lastName: "Default Last Name",
    field: "list",
    yoe: 0,
    serviceId: 1, // need a function to get all the available service id
  };

  constructor() {}

  ngOnInit(): void {
    this.defaultField = "Generalist";
    this.defaultServiceId = 11;
  }

  onSubmit() {
    console.log(this.doctor);
  }
}
