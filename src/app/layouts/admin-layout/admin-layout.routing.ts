import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UsersManagementDialogComponent } from '../../users-management-dialog/users-management-dialog.component';
import { AddClientComponent } from 'app/add-client/add-client.component';
import { UpdateComponent } from 'app/update/update.component';
import { IconsComponent } from 'app/icons/icons.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'add',          component: AddClientComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'update',        component: UpdateComponent },
    { path: 'icons',        component: IconsComponent },
    { path: 'umdialog',       component: UsersManagementDialogComponent },
];
