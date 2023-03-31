import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showDialog: boolean = true;
  showUsers: boolean = false;
  showMessage: boolean = false;
  inputValue: string;
  onClick(){
    if(this.inputValue==="admin"){
      this.showDialog = false;
      this.showUsers = true;
    }
    else{
      this.showMessage = true;
    }
  }
}
