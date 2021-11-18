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
          DareTypeName: 'Testing Easy'},
        {
          DareTypeId: 2,
          DareTypeName: 'Testing Crazy'
        },
        {
          DareTypeId: 3,
          DareTypeName: 'Testing Hard'
        },
        {
          DareTypeId: 4,
          DareTypeName: 'Testing MachineLearned'
        },
        {
          DareTypeId: 5,
          DareTypeName: 'Testing Card Fire Games'
        }
      ]
    }
  }

}
