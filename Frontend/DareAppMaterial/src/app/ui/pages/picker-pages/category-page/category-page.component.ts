import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoPageComponent } from '../../info-page/info-page.component';
import { LoginPageComponent } from '../../login-page/login-page.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  constructor(private router:ActivatedRoute, private _bottomSheet: MatBottomSheet) { 

  }
  orderObj: any= '';
  categoryTitle: string = '';
  categoryColor: string = '';
  categoryPic: string = '';

  ngOnInit(): void {
    this.router.queryParams.subscribe((i) => {
      this.orderObj = i.categoryName;
    });

    this.categoryTitle = this.orderObj.replace('_', ' '); // machine_generated -> machine generated
    this.categoryColor = this.orderObj.replace('_', '-')+ '-color'; // machine_generated -> machine-generated-color
    this.categoryPic = this.orderObj.replace('_', '-');

    console.log(this.categoryTitle);
    console.log(this.categoryColor);
    console.log(this.categoryPic);

  }

  openLoginPage(): void {
    this._bottomSheet.open(LoginPageComponent);
  }


  openInfoPage(): void {
    this._bottomSheet.open(InfoPageComponent);
  }
}
