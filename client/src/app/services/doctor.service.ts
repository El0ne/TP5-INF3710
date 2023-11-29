import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Doctor } from "@common/doctor";
import { Observable, catchError, tap, throwError } from "rxjs";
import { DOCTOR } from "./server-routes";

@Injectable({
  providedIn: "root",
})
export class DoctorService {
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any> {
    return this.http.get<any>(DOCTOR).pipe(
      tap((doctors) => console.log("Doctors from the server", doctors)),
      catchError((error) => {
        console.error("Error fetching doctors", error);
        return throwError(error);
      })
    );
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

  getExistingDoctorIds() {
    return this.http.get<number[]>(`${DOCTOR}/ids`);
  }

  deleteDoctor(id: string) {
    return this.http.delete(`${DOCTOR}/${id}`);
  }

  updateDoctor(doctor: Doctor) {
    const headers = { "content-type": "application/json" };
    const body = JSON.stringify(doctor);
    return this.http.put<Doctor>(`${DOCTOR}/${doctor.idmedecin}`, body, {
      headers,
    });
  }
}
