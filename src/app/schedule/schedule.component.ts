import { Component, OnInit } from '@angular/core';
import { Appointment } from 'app/models/appointment.model';
import { AppointmentService } from 'app/services/appointment.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, timeGridPlugin];
  calendarOptions: any = {}; // FullCalendar options
  appointments: Appointment[];
  clients: Client[] = [];
  selectedName: string;
  client: Client;
  constructor(private clientService: ClientService,private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(
      (clients: Client[]) => {
        this.clients = clients;
        if (clients.length > 0) {
          this.selectedName = clients[0].name;
          this.getClientByName();
        }
      },
      (error: any) => {
        console.error('Failed to get clients:', error);
      }
    );
    this.appointmentService.getAllAppointments().subscribe(
      (appointments: Appointment[]) => {
        this.appointments=appointments;
      },
      (error: any) => {
          console.error('Failed to get appointments:', error);
      }
  );
  }

  addAppointment(client: string, date: Date): void {
    this.appointmentService.getAllAppointments().subscribe(
      (appointments: Appointment[]) => {
        const len = appointments.length;
        const newAppointment: Appointment = {
          id: len + 1,
          client: client,
          date: date
        };
        console.log(newAppointment);
        this.appointmentService.addAppointment(newAppointment);
      },
      (error: any) => {
        console.error('Failed to get appointments:', error);
      }
    );
  }
  
  getClientByName() {

    this.clientService.getClientByName(this.selectedName).subscribe(
      (response) => {
        this.client = response;
        console.log('client:', this.client);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
