import { Injectable, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(    
    private authService: SocialAuthService,
    private service: SharedService
    ) { }

    public socialUser!: SocialUser;
    public isLoggedin: boolean = false;
  
    // to be used as global user
    public localUser = {
      isLoggedIn : false,
      email: "guest",
      username : "Guest",
      userType : "Guest",
      userAvatar : "https://dare.webjuice.ro/starred.png",
      dareCount: 0,
      dareTypeCount: 0
    }


    //social service module login
    syncLocalUserWithSocial(): void {   
      
      this.authService.authState.subscribe((user) => {
        console.log(user);
        this.socialUser = user; // init plugin vars  
        this.isLoggedin = (user != null);

        if (user != null){ // init locals
          this.localUser.isLoggedIn = true;
          this.localUser.email = this.socialUser.email;
          this.localUser.username = this.socialUser.name;
          this.localUser.userType = this.socialUser.provider;
          this.localUser.userAvatar = this.socialUser.photoUrl;
          // push id to backend and check if already existing + get data
        }
        else{
          this.localUser = {
            isLoggedIn : false,
            email: "guest",
            username : "Guest",
            userType : "Guest",
            userAvatar : "https://dare.webjuice.ro/starred.png",
            dareCount: 0,
            dareTypeCount: 0
          }
        }
      });
    }
    

    //social service module fcts
    async signInWithGoogle(): Promise<void> {
      await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      if (this.localUser.isLoggedIn){
        console.log("Successfully logged in with Google");

        this.service.getUserDetails(this.localUser.email).subscribe(data => {
          this.localUser.dareCount = data[0].DaresDone;
          this.localUser.dareTypeCount = data[0].GamesPlayed;
        });
      } 
    }

    async signInWithFB(): Promise<void> {
      await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      if (this.localUser.isLoggedIn) {
        console.log("Successfully logged in with Facebook");

        this.service.getUserDetails(this.localUser.email).subscribe(data => {
          this.localUser.dareCount = data[0].DaresDone;
          this.localUser.dareTypeCount = data[0].GamesPlayed;
        });
      }
    }

    async signOut(): Promise<void> {
      await this.authService.signOut();
      console.log(this.localUser.isLoggedIn);
      if (!this.localUser.isLoggedIn) {
        console.log("Successfully logged out of social");
      }
    }
    
    refreshToken(): void {
      this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);

      if (this.localUser.isLoggedIn) {
        this.service.getUserDetails(this.localUser.email).subscribe(data => {
          this.localUser.dareCount = data[0].DaresDone;
          this.localUser.dareTypeCount = data[0].GamesPlayed;
        });
      }
    }  
}
