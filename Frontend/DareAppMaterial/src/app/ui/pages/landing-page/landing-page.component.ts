import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatGridListModule } from '@angular/material/grid-list';
import { InfoPageComponent } from '../info-page/info-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openInfoPage(): void {
    this._bottomSheet.open(InfoPageComponent);
  }
  
  openLoginPage(): void {
    this._bottomSheet.open(LoginPageComponent);
  }

  ngOnInit(): void {
  }

}
