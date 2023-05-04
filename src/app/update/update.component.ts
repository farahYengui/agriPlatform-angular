import { Component, OnInit } from '@angular/core';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  clients: Client[] = [];
  selectedName: string;
  client: Client;
  constructor(private clientService: ClientService,private location: Location) { }
  cities = ['Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine',
    'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine',
    'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];


  submitted = false;
  form = true;
  onSubmit() { 
    this.submitted = true;
    this.clientService.updateClient(this.selectedName,this.client).subscribe(
      (updatedClient: Client) => {
        console.log('Client updated:', updatedClient);
      },
      (error: any) => {
        console.error('Failed to update client:', error);
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

  rowData1 = [
    { id: 1, kind: '', variety: '', density: '', plantingYear: '', size: '' }
  ];
  counter = 1;

  addRow1(event: Event) {
    event.preventDefault();
    this.counter++;
    this.rowData1.push({ id: this.counter, kind: '', variety: '', density: '', plantingYear: '', size: '' });
  }

  trackByFn(index, item) {
    return item.id;
  }

  c = 1;
  rowData2 = [
    { id: 'F' + this.c, depth: '', flow: '', salinity: '', equipment: '' }
  ];

  addRow2(event: Event) {
    event.preventDefault();
    this.c++;
    this.rowData2.push({ id: 'F' + this.c, depth: '', flow: '', salinity: '', equipment: '' });

  }

  rowData3 = [
    { id: '', capacity: '', betan: '', equipment: '' }
  ];

  addRow3(event: Event) {
    event.preventDefault();
    this.rowData3.push({ id: '', capacity: '', betan: '', equipment: '' });
  }
  plan = [{ sector: 1, area: '', nature: '', egg: '', flowg: '', flows: '' }];

  addRow4(event: Event) {
    event.preventDefault();
    this.plan.push({
      sector: this.plan.length + 1, area: '', nature: '', egg: '', flowg: '', flows: ''
    });
  }



  ngOnInit() {

    this.clientService.getAllClients().subscribe(
      (clients: Client[]) => {
        this.clients = clients;
        if (clients.length > 0) {
          this.selectedName = clients[0].name;
          this.form = false;
          this.getClientByName();
        }
      },
      (error: any) => {
        console.error('Failed to get clients:', error);
      }
    );

  }
  delete(){
    if (confirm("Are you sure you want to delete this client?")) {
      this.clientService.deleteClient(this.selectedName).subscribe(
        () => {
          console.log(`Client with name ${this.selectedName} deleted.`);
          this.location.go('/home/update');
    window.location.reload();
        },
        (error) => {
          console.error(`Failed to delete client with name ${this.selectedName}:`, error);
          this.location.go('/home/update');
          window.location.reload();
        }
      );
    }
  }
  
}
