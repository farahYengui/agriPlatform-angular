import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

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

  addRow1() {
    this.rowData1.push({ kind: '', variety: '', densitye: '',densityE: '', plantingYear: '', size: '' });
  }

  c=1;
  rowData2 = [
    { id: 'F'+this.c, depth: '', flow: '',salinity: '', equipment: '' }
  ];

  addRow2() {
    this.c++;
    this.rowData2.push({ id: 'F'+this.c, depth: '', flow: '',salinity: '', equipment: '' });
    
  }

  rowData3 = [
    { id: '', capacity: '', betan: '',equipment: '' }
  ];

  addRow3() {
    this.rowData3.push({ id: '', capacity: '', betan: '',equipment: '' });
  }

    plan = [{sector:1,area:'',nature:'',egg:'',flowg:'',flows:''}];

addRow4() {
  this.plan.push({
    sector: this.plan.length + 1,area:'',nature:'',egg:'',flowg:'',flows:''
  });
}


  
  ngOnInit(): void {
  }

}
