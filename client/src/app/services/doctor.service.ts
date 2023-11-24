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

  getAvailableDoctorId(): Observable<string> {
    return this.http.get<string>(`${DOCTOR}/id`);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(doctor);
    console.log(body);
    return this.http.post<Doctor>(DOCTOR, body, { headers });
  }
}
