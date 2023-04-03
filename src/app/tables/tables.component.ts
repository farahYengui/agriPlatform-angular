import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Email', 'City', 'Address','Size','Total'],
          dataRows: [
              ['1', 'Dakota Rice', 'dacota@gmail.com', 'Sfax', 'Skhira','9ha', '3000 olive tree'],
              ['2', 'Minerva Hooper', 'minerva@gmail.com', 'Sfax', 'Menzel cheker','8ha', '1000 olive tree'],
              ['3', 'Sage Rodriguez', 'sage@gmail.com', 'Mahdia', 'Regueb','7ha', '900 olive tree'],
              ['4', 'Philip Chaney', 'philip@gmail.com, South', 'Sidi bouzid', 'hbira','6ha', '800 olive tree'],
              ['5', 'Doris Greene', 'doris@gmail.com', 'Sfax', 'bouthadi','5ha', '700 olive tree'],
              ['6', 'Mason Porter', 'mason@gmail.com', 'Sfax', 'Ltaifa','3ha', '700 olive tree']
          ]
      };
      
  }

}
