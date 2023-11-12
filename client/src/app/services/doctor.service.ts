import { Injectable } from "@angular/core";
import { Doctor } from "@common/doctor";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  getDoctors(): Doctor[] {
    return this.DOCTOR_LIST;
  }

  getAvailableDoctorId(): number {
    return 453; // need a function to get next available id
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
