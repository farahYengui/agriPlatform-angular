import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddClientComponent } from 'app/add-client/add-client.component';
import { UpdateComponent } from 'app/update/update.component';
import { IconsComponent } from 'app/icons/icons.component';
import { ScheduleComponent } from 'app/schedule/schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCOZBPNbTBkwLt997M2I7hdJfVkD5l73rw'}),
    FullCalendarModule
  ],
  
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    AddClientComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UpdateComponent,
    IconsComponent,
    ScheduleComponent
  ],
})

export class AdminLayoutModule {}
