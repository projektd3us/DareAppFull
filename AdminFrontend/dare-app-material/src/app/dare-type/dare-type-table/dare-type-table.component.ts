import { SharedService } from '../../shared.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DareTypeAddEditModalComponent } from '../dare-type-add-edit-modal/dare-type-add-edit-modal.component';

@Component({
  selector: 'app-dare-type-table',
  templateUrl: './dare-type-table.component.html',
  styleUrls: ['./dare-type-table.component.css']
})
export class DareTypeTableComponent implements OnInit {

  constructor(private service:SharedService, private dialog: MatDialog) { }

  displayedColumns = ['DareTypeId', 'DareTypeName'];
  dataSource:DareType[]=[];

  
  ngOnInit(): void {
    this.refreshDareTypeList();
  }

  refreshDareTypeList(){
    this.service.getDareTypeList().subscribe(data =>{
      this.dataSource=data;
    })
  }

  editDareType(row:DareType){
    this.dialog.open(DareTypeAddEditModalComponent, {
      data: {
        rowData: row,
      },
    });
  }

  addDareType(){
    //this should get a new ID for us
    var newId: any;
    this.service.getNewDareTypeId().subscribe(data =>{

      newId = parseInt(data[0].DareTypeId);
      //create an empty daretype to be filled in
      var row:DareType = {
        DareTypeId: newId,
        DareTypeName: 'New dare'
      }

      //open dialog with data
      this.dialog.open(DareTypeAddEditModalComponent, {
        data: {
          rowData: row,
        },
      });

    })
  }

}

export interface DareType {
  DareTypeId: number;
  DareTypeName: string;
}