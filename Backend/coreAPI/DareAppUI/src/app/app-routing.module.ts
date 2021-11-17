import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DareComponent } from './dare/dare.component';
import { DareTypeComponent } from './dare-type/dare-type.component';



const routes: Routes = [
  {path:'dare', component:DareComponent},
  {path:'daretype', component:DareTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
