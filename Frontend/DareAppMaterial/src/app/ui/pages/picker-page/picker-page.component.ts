import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-picker-page',
  templateUrl: './picker-page.component.html',
  styleUrls: ['./picker-page.component.css']
})
export class PickerPageComponent implements OnInit {

  constructor(private service:SharedService) { }
  cards:any;

  ngOnInit(): void {
    this.service.getDareTypeList().subscribe(data =>{
      this.cards=data;
    });
    console.log(this.cards);
  }

}
