import { Component } from '@angular/core';

@Component({
  selector: 'app-users-management-dialog',
  templateUrl: './users-management-dialog.component.html',
  styleUrls: ['./users-management-dialog.component.scss']
})
export class UsersManagementDialogComponent{

  constructor() {}
  inputValue: string;

  onOKClick() {
    if(this.inputValue==="admin"){
        
    }
  }

}
