import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor() { }
  clients = ['Dakota Rice','Minerva Hooper','Sage Rodriguez','Philip Chaney','Doris Greene','Mason Porter']
  cities = ['Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine',
   'Kebili', 'Kef', 'Mahdia', 'Manouba', 'Medenine', 
  'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'];

  model = {id:18, name:'Dr. IQ',email:"iq@gmail.com", city: this.cities[0], address:'Regueb',size:'5ha',sizen:'2ha',total:"3000 arbre olive"};

  submitted = false;
  onSubmit() { this.submitted = true; }
  

  rowData1 = [
    { kind: '', variety: '', densitye: '',densityE: '', plantingYear: '', size: '' }
  ];


  rowData2 = [
    { id: '', depth: '', flow: '',salinity: '', equipment: '' }
  ];


  rowData3 = [
    { id: '', capacity: '', betan: '',equipment: '' }
  ];
  plan = [{sector:1,area:'',nature:'',egg:'',flowg:'',flows:''}];

  addRow4() {
    this.plan.push({
      sector: this.plan.length + 1,area:'',nature:'',egg:'',flowg:'',flows:''
    });
  }

  generatePdf() {
    const element = document.getElementById('to-print'); 
    html2pdf()
      .from(element)
      .save('customer.pdf');
  }
  
  ngOnInit() {
  }

}
