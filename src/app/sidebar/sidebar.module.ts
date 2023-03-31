import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [ RouterModule, CommonModule,  MatDialogModule ],
    declarations: [ SidebarComponent],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
