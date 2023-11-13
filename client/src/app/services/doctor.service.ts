import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "@common/doctor";
import { Observable } from "rxjs";
import { DATABASE } from "./server-routes";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctors(): Doctor[] {
    return this.DOCTOR_LIST;
  }

  getAvailableDoctorId(): Observable<string> {
    return this.http.get<string>(DATABASE);
  }

  getListOfServiceId(): number[] {
    // should be in other service but don't wanna create service.service
    return [1, 3, 6];
  }

  addDoctor(doctor: Doctor) {
    console.log("doctor", doctor);
  }

  DOCTOR_LIST: Doctor[] = [
    {
      id: 999,
      firstName: "Joe",
      lastName: "Trout",
      specialization: "Neuro",
      yoe: 11,
      serviceId: 1,
    },
    {
      id: 1,
      firstName: "Joe",
      lastName: "Trout",
      specialization: "Neuro",
      yoe: 11,
      serviceId: 1,
    },
    {
      id: 4,
      firstName: "Joe",
      lastName: "Trout",
      specialization: "Neuro",
      yoe: 11,
      serviceId: 1,
    },
    {
      id: 2,
      firstName: "Joe",
      lastName: "Trout",
      specialization: "Neuro",
      yoe: 11,
      serviceId: 1,
    },
  ];
}
