import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "@common/doctor";
import { Observable } from "rxjs";
import { DOCTOR } from "./server-routes";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any> {
    return this.http.get<any>(DOCTOR);
  }

  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${DOCTOR}/${id}`);
  }

  getAvailableDoctorId(): Observable<string> {
    return this.http.get<string>(`${DOCTOR}/available`);
  }

  addDoctor(doctor: Doctor) {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(doctor);
    return this.http.post<Doctor>(DOCTOR, body, { headers });
  }

  getExistingDoctorIds() {
    return [999, 1, 4];
    // return this.http.get<number[]>(`${DOCTOR}/ids`);
  }

  updateDoctor(doctor: Doctor) {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(doctor);
    return this.http.put<Doctor>(`${DOCTOR}/${doctor.id}`, body, { headers });
  }
}
