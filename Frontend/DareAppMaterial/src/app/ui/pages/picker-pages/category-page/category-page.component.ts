import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  constructor(private router:ActivatedRoute) { 

  }
  orderObj: any= '';
  categoryTitle: string = '';
  categoryColor: string = '';

  ngOnInit(): void {
    this.router.queryParams.subscribe((i) => {
      this.orderObj = i.categoryName;
    });

    this.categoryTitle = this.orderObj.replace('_', ' '); // machine_generated -> machine generated
    this.categoryColor = this.orderObj.replace('_', '-')+ '-color'; // machine_generated -> machine-generated-color

    console.log(this.categoryTitle);
    console.log(this.categoryColor);

  }

}
