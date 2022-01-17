import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services and modules
import { MaterialModule } from './material-module';
import { SocialModule } from './social-module';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './ui/pages/landing-page/landing-page.component';
import { PickerPageComponent } from './ui/pages/picker-page/picker-page.component';
import { InfoPageComponent } from './ui/pages/info-page/info-page.component';
import { LoginPageComponent } from './ui/pages/login-page/login-page.component';
import { CategoryPageComponent } from './ui/pages/picker-pages/category-page/category-page.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PickerPageComponent,
    InfoPageComponent,
    LoginPageComponent,
    CategoryPageComponent,
  ],
  imports: [
    MaterialModule,
    SocialModule,
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [SharedService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
