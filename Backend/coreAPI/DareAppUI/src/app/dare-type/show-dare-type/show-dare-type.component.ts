import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dare-type',
  templateUrl: './show-dare-type.component.html',
  styleUrls: ['./show-dare-type.component.css']
})
export class ShowDareTypeComponent implements OnInit {

  constructor(private service:SharedService) { }

  DareTypeList:any=[];
  ModalTitle:string="";
  ActivateAddEditDareTypeComp:boolean=false;
  daretype:any;

  ngOnInit(): void {
    this.refreshDareTypeList();
  }

  addClick(){
    this.daretype={
      DareTypeId:0,
      DareTypeName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDareTypeComp=true;
  }

  closeClick(){
    this.ActivateAddEditDareTypeComp=false;
    this.refreshDareTypeList();
  }

  refreshDareTypeList(){
    this.service.getDareTypeList().subscribe(data =>{
      this.DareTypeList=data;
    })
  }

}
