import { DareAddEditModalComponent } from './../dare-add-edit-modal/dare-add-edit-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dare-table',
  templateUrl: './dare-table.component.html',
  styleUrls: ['./dare-table.component.css']
})
export class DareTableComponent implements OnInit {

  constructor(private service:SharedService, private dialog: MatDialog) { }

  displayedColumns = ['DareId', 'DareText', 'DareTypeName'];
  dataSource:Dare[]=[];

  
  ngOnInit(): void {
    this.refreshDareList();
  }

  refreshDareList(){
    this.service.getDareList().subscribe(data =>{
      this.dataSource=data;
    })
  }

  editDare(row:any){
    this.dialog.open(DareAddEditModalComponent, {
      data: {
        rowData: row,
      },
    });
  }

  addDare(){
    //this should get a new ID for us
    var newId: any;
    this.service.getNewDareId().subscribe(data =>{

      newId = parseInt(data[0].DareId);
      //create an empty daretype to be filled in
      var row:Dare = {
        DareId: newId,
        DareText: 'New Dare',
        DareTypeName: 'Dare Type'
      }

      //open dialog with data
      this.dialog.open(DareAddEditModalComponent, {
        data: {
          rowData: row,
        },
      });

    })
  }
}

export interface Dare {
  DareId: number;
  DareText: string;
  DareTypeName:string;
}