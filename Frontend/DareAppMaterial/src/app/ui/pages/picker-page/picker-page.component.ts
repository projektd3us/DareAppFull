import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-picker-page',
  templateUrl: './picker-page.component.html',
  styleUrls: ['./picker-page.component.css']
})
export class PickerPageComponent implements OnInit {

  constructor(private service:SharedService, private router:Router, public userService:UserService) { }
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
    var categoryName: string = passed.replace(' ','_');

    let urlTree = this.router.parseUrl('/category-page');
    urlTree.queryParams['categoryName'] = categoryName;

    this.router.navigateByUrl(urlTree); 
    if(this.userService.isLoggedin){
      this.service.updateGamesPlayed(this.userService.localUser.email).subscribe(data => {
      });
    }
    
  }

}
