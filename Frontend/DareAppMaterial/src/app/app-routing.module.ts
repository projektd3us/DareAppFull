import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './ui/pages/landing-page/landing-page.component';
import { PickerPageComponent } from './ui/pages/picker-page/picker-page.component';
import { CategoryPageComponent } from './ui/pages/picker-pages/category-page/category-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/landing-page'},
  {path:'picker-page', component:PickerPageComponent},
  {path:'landing-page', component:LandingPageComponent},
  {path:'category-page', component:CategoryPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
