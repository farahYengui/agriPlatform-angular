import { Component,Inject,Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog'

@Component({
  selector: 'app-users-management-dialog',
  templateUrl: './users-management-dialog.component.html',
  styleUrls: ['./users-management-dialog.component.scss']
})
export class UsersManagementDialogComponent {
  @Input() data: any;

  constructor(@Inject(MAT_DIALOG_DATA) public inputData: any, public dialogRef: MatDialogRef<UsersManagementDialogComponent>) {
    this.data = inputData;
  }


}
