import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services and modules
import { MaterialModule } from './material-module';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginPopupComponent } from './ui/login-popup/login-popup.component';
import { LandingPageComponent } from './ui/pages/landing-page/landing-page.component';
import { PickerPageComponent } from './ui/pages/picker-page/picker-page.component';
import { InfoPageComponent } from './ui/pages/info-page/info-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPopupComponent,
    LandingPageComponent,
    PickerPageComponent,
    InfoPageComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
