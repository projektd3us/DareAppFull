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
    
    if(!this.cards){
      this.cards = [
        { 
          DareTypeId: 1,
          DareTypeName: 'Easy'},
        {
          DareTypeId: 2,
          DareTypeName: 'Crazy'
        },
        {
          DareTypeId: 3,
          DareTypeName: 'Hard'
        },
        {
          DareTypeId: 4,
          DareTypeName: 'Machine Generated'
        }
      ]
    }
  }

  openPicked(passed: any){
    console.log("clicked");
    console.log(passed.replace(' ','_'));
  }

}
