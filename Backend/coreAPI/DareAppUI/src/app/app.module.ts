import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DareTypeComponent } from './dare-type/dare-type.component';
import { ShowDareTypeComponent } from './dare-type/show-dare-type/show-dare-type.component';
import { AddEditDareTypeComponent } from './dare-type/add-edit-dare-type/add-edit-dare-type.component';

import { DareComponent } from './dare/dare.component';
import { ShowDareComponent } from './dare/show-dare/show-dare.component';
import { AddEditDareComponent } from './dare/add-edit-dare/add-edit-dare.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // FormsModule,
    // ReactiveFormsModule,

    DareTypeComponent,
    ShowDareTypeComponent,
    AddEditDareTypeComponent,

    DareComponent,
    ShowDareComponent,
    AddEditDareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
