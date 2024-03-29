import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  @ViewChild('heroForm') form: NgForm;
  cities = ['Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine',
    'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine',
    'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];
  
  client: Client = {
    id: null,
    name: '',
    email: '',
    city: this.cities[16],
    address: '',
    irrigated: null,
    noirrigated: null,
    total: null,
    homogenous: null,
    heterogenous: null,
    clay: null,
    silt: null,
    sand: null,
    limestone: null,
    gypsum: null,
    maps: ''
  };
  submitted = false;
  onSubmit() {
    console.log('submitted');
    this.clientService.getAllClientNames().subscribe(names => {
      if (names.includes(this.client.name))
      alert('Client Name already exists');
    else {
      this.clientService.createClient(this.client).subscribe(
        (createdclient: Client) => {
          console.log('client created:', createdclient);
          this.submitted = true;

        },
        (error: any) => {
          alert('Failed to create user' );
        }
      );
    }
    });

    
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
  //model = {id:18, name:'Dr. IQ',email:"iq@gmail.com", city: this.cities[16], address:'Regueb',size:'5ha',sizen:'2ha',total:"3000 arbre olive"};

  constructor(private clientService: ClientService) { }
  ngOnInit(): void {
  }
  onReset() {
    this.form.reset();
    this.submitted = false;
  }

}
