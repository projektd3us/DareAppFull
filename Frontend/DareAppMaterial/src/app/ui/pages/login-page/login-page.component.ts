import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatButton } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialAuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angularx-social-login';
import { Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { SharedService } from 'src/app/shared.service';


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
    public userService: UserService,
    public service: SharedService
    ) {}
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',});
  }

  ngOnInit(): void {
    this.userService.refreshToken();
    this.userService.syncLocalUserWithSocial();

    if(this.userService.isLoggedin){
      this.service.getUserDetails(this.userService.localUser.email).subscribe(data => {
        this.userService.localUser.dareCount = data[0].DaresDone;
        this.userService.localUser.dareTypeCount = data[0].GamesPlayed;
      });
    }
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

  // userService calls for auth

  signInWithGoogle(){
    this.userService.signInWithGoogle();
    if (this.userService.isLoggedin){
      this.openSnackBar("Successfully logged in!", "Ok");
    }
  }

  signInWithFB(){
    this.userService.signInWithFB();
    if (this.userService.isLoggedin){
      this.openSnackBar("Successfully logged in!", "Ok");
    }
  }

  signOut(){
    this.userService.signOut();
    if (this.userService.isLoggedin){
      this.openSnackBar("Successfully signed out!", "Ok");
    }
  }
}
