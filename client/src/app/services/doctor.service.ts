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

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(DOCTOR);
  }

  getDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${DOCTOR}/${id}`);
  }

  getAvailableDoctorId(): Observable<string> {
    return this.http.get<string>(`${DOCTOR}/available`);
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(doctor);
    return this.http.post<Doctor>(DOCTOR, body, { headers });
  }

  getExistingDoctorIds(): Observable<number[]> {
    return this.http.get<number[]>(`${DOCTOR}/ids`);
  }

  deleteDoctor(id: string): Observable<void> {
    return this.http.delete<void>(`${DOCTOR}/${id}`);
  }

  updateDoctor(doctor: Doctor): Observable<void> {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(doctor);
    return this.http.put<void>(DOCTOR, body, {
      headers,
    });
  }
}
