import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatRippleModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatBottomSheetModule
  ],
  providers: [{
    provide: MatBottomSheetRef,
    useValue: {}
  },
  {
    provide: MAT_BOTTOM_SHEET_DATA,
    useValue: {}
  }
  ],
})
export class MaterialModule { }