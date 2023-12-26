import { Injectable } from '@angular/core';
import { OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { authConfig } from 'app/app.module';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


export interface UserInfo{
  info:{
    sub:string,
    email: string,
    name: string,
  }
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
userProfileSubject = new Subject<UserInfo>()

  constructor(private readonly oAuthService: OAuthService,private router:Router) {  
  
  }
  login(){
    this.oAuthService.configure(authConfig)
    this.oAuthService.loadDiscoveryDocument().then(()=> {
      this.oAuthService.tryLoginImplicitFlow().then(()=> {
        if(!this.oAuthService.hasValidAccessToken()){
          this.oAuthService.initLoginFlow()   
        }
        else {
          this.oAuthService.loadUserProfile().then((userProfile)=> {
            console.log(JSON.stringify(userProfile))
            this.router.navigate(['/home']);
          })
        }
      })
    })
  }
  isLoggedIn():boolean{
    return this.oAuthService.hasValidAccessToken()
  }
  signOut(){
    this.oAuthService.logOut()
  }


}
