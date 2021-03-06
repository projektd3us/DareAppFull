import { Component, HostBinding, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { fadeInAnimation, slideInOutAnimation } from './animations';
import { LoginPageComponent } from './ui/pages/login-page/login-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInAnimation,
    slideInOutAnimation
  ]
})
export class AppComponent{
  
  title = 'dare-app-material';

  @ViewChild(LoginPageComponent) socialStatus : any;
  //constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(LoginPopupComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
