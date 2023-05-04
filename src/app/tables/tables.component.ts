import { Component, OnInit } from '@angular/core';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

    clients: Client[];
    constructor(private clientService: ClientService) { }

    ngOnInit() {
        
        this.clientService.getAllClients().subscribe(
            (clients: Client[]) => {
                this.clients = clients;
            },
            (error: any) => {
                console.error('Failed to get clients:', error);
            }
        );
    
          
      
      
  }

}
