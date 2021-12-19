import { AfterViewInit, Component, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatButton } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'login-info-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<LoginPageComponent>, 
    private authService: SocialAuthService,
    private _snackBar: MatSnackBar,
    ) {}
  
  // angularx plugin variables
  socialUser!: SocialUser;
  isLoggedin: boolean = false;

  // local variable
  localUser = {
    isLoggedIn : false,
    username : "Guest",
    userType : "Guest",
    userAvatar : "https://dare.webjuice.ro/starred.png",
    dareCount: 0,
    dareTypeCount: 0
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
      panelClass: 'status-snackbar'});
  }


  ngOnInit(): void {
    this.authService.initState.subscribe((user) => {
        this.refreshToken();
    });

    this.authService.authState.subscribe((user) => {

      this.socialUser = user; // init plugin vars
      this.isLoggedin = (user != null);

      if (user != null){ // init locals
        this.localUser.isLoggedIn = true;
        this.localUser.username = this.socialUser.name;
        this.localUser.userType = this.socialUser.provider;
        this.localUser.userAvatar = this.socialUser.photoUrl;
        // push id to backend and check if already existing + get data
      }
      else{
        this.localUser = {
          isLoggedIn : false,
          username : "Guest",
          userType : "Guest",
          userAvatar : "https://dare.webjuice.ro/starred.png",
          dareCount: 0,
          dareTypeCount: 0
        }
      }
      console.log(this.socialUser);
    });
  }


 //bottom sheet
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  dismiss(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }



  //google login stuff
  async signInWithGoogle(): Promise<void> {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    if (this.localUser.isLoggedIn){
      this.openSnackBar("Successfully signed in!", "ok")
    }
  }

  async signInWithFB(): Promise<void> {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    if (this.localUser.isLoggedIn) {
      this.openSnackBar("Successfully signed in!", "ok")
    }
  }

  async signOut(): Promise<void> {
    await this.authService.signOut();
    console.log(this.localUser.isLoggedIn);
    if (!this.localUser.isLoggedIn) {
      this.openSnackBar("Successfully signed out!", "ok")
    }
  }
  
  refreshToken(): void {
    try{
      this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    }
    catch{
      console.log("google reauth problem");
    }
  }


}
