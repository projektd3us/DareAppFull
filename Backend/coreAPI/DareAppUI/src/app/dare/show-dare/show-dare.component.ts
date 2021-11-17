import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-show-dare',
  templateUrl: './show-dare.component.html',
  styleUrls: ['./show-dare.component.css']
})
export class ShowDareComponent implements OnInit {

  constructor(private service:SharedService) { }

  DareList:any=[];

  ngOnInit(): void {
    this.refreshDareList();
  }

  refreshDareList(){
    this.service.getDareList().subscribe(data =>{
      this.DareList=data;
    })
  }
}
