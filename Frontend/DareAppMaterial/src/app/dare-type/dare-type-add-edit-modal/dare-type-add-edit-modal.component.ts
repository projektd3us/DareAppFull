import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DareType } from '../dare-type-table/dare-type-table.component';

@Component({
  selector: 'app-dare-type-add-edit-modal',
  templateUrl: './dare-type-add-edit-modal.component.html',
  styleUrls: ['./dare-type-add-edit-modal.component.css']
})
export class DareTypeAddEditModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {rowData: DareType}) { }
}
