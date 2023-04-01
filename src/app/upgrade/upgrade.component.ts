import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig  } from '@angular/material/dialog';
import { UsersManagementDialogComponent } from 'app/users-management-dialog/users-management-dialog.component';


@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  openCustomAlert() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Confirmation',
      message: 'Are you sure you want to delete this item?'
    };
    const dialogRef = this.dialog.open(UsersManagementDialogComponent, dialogConfig);
    

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('User clicked OK');
      } else {
        console.log('User clicked Cancel');
      }
    });
  }

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
