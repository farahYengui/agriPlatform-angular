import { Component, OnInit } from '@angular/core';
import { Appointment } from 'app/models/appointment.model';
import { AppointmentService } from 'app/services/appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss']
})
export class AppointmentDetailsComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }
  
}
