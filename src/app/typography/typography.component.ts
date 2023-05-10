import { Component, OnInit } from '@angular/core';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  clients: Client[] = [];
  selectedName: string;
  client: Client;
  constructor(private clientService: ClientService) { }
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
    { id: 1, kind: 'kind1', variety: 'variety1', density: 13, plantingYear: 2014, size: 200 },
    { id: 2, kind: 'kind2', variety: 'variety2', density: 17, plantingYear: 2015, size: 100 },
    { id: 3, kind: 'kind3', variety: 'variety3', density: 11, plantingYear: 2019, size: 70 },
    { id: 4, kind: 'kind3', variety: 'variety4', density: 13, plantingYear: 2020, size: 100 }
  ];
  counter = 1;
  trackByFn(index, item) {
    return item.id;
  }

  c = 1;
  rowData2 = [
    { id: 'F' + this.c++, depth: 12, flow: 14, salinity: 1.3, equipment: 'equipment1' },
    { id: 'F' + this.c++, depth: 14, flow: 100, salinity: 7.2, equipment: 'equipment2' }
  ];


  rowData3 = [
    { id: 1, capacity: 15, betan: 40, equipment: 'equipment1' },
    { id: 2, capacity: 20, betan: 10, equipment: 'equipment2' },
    { id: 3, capacity: 67, betan: 32, equipment: 'equipment3' }
  ];

  plan = [{ sector: 1, area: 9, nature: 'nature', egg: 1, flowg: 2, flows: 3 }];




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

  generatePdf() {
    const element = document.getElementById('to-print'); 
    html2pdf()
      .from(element)
      .save('customer.pdf');
  }

}
