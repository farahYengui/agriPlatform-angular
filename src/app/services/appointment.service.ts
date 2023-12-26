import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'app/models/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  // private appointments: Appointment[] = [];
  // // Method to add a new appointment
  // addAppointment(appointment: Appointment): void {
  //   this.appointments.push(appointment);
  // }

  // // Method to get all appointments
  // getAppointments(): Appointment[] {
  //   return this.appointments;
  // }

  // // Method to update an appointment by ID
  // updateAppointment(appointment: Appointment): void {
  //   const index = this.appointments.findIndex(a => a.id === appointment.id);
  //   if (index !== -1) {
  //     this.appointments[index] = appointment;
  //   }
  // }

  // // Method to delete an appointment by ID
  // deleteAppointment(id: number): void {
  //   const index = this.appointments.findIndex(a => a.id === id);
  //   if (index !== -1) {
  //     this.appointments.splice(index, 1);
  //   }
  // }
  private baseUrl = 'http://localhost:8080/api/v1/appointments';

  constructor(private http: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(this.baseUrl, appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}
