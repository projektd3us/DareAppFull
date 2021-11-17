import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// services and modules
import { MaterialModule } from './material-module';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';

// components - add here
import { DareComponent } from './dare/dare.component';
import { DareTypeComponent } from './dare-type/dare-type.component';
import { DareTypeTableComponent } from './dare-type/dare-type-table/dare-type-table.component';
import { DareTableComponent } from './dare/dare-table/dare-table.component';
import { DareAddEditModalComponent } from './dare/dare-add-edit-modal/dare-add-edit-modal.component';
import { DareTypeAddEditModalComponent } from './dare-type/dare-type-add-edit-modal/dare-type-add-edit-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DareComponent,
    DareTypeComponent,
    DareTypeTableComponent,
    DareTableComponent,
    DareAddEditModalComponent,
    DareTypeAddEditModalComponent
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
