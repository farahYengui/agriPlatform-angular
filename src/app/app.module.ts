import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UsersManagementDialogComponent } from './users-management-dialog/users-management-dialog.component';

import { LoginComponent } from './login/login.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
// register Swiper custom elements
register();

import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthModule } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', 
  redirectUri: 'http://localhost:4200',
  clientId: '125157006887-npb4ci2q6qitrqg57mnbg7dqgmau7gar.apps.googleusercontent.com',
  responseType: 'token id_token',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation:false,
  
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
     MatButtonModule,
     OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/api/v1'],
        sendAccessToken: true,
      },
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UsersManagementDialogComponent,
    AppointmentDetailsComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents: [UsersManagementDialogComponent]
})
export class AppModule { }
