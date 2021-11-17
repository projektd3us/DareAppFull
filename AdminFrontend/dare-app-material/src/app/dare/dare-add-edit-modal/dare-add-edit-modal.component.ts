import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dare } from '../dare-table/dare-table.component';

@Component({
  selector: 'app-dare-add-edit-modal',
  templateUrl: './dare-add-edit-modal.component.html',
  styleUrls: ['./dare-add-edit-modal.component.css']
})
export class DareAddEditModalComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: {rowData: Dare}) { }
}