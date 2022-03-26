import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsContainerComponent } from './modals/modals-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [
    ModalsContainerComponent,
  ],

  imports: [
    CommonModule,
    MatDialogModule,
  ],

  exports: [
    ModalsContainerComponent,
  ]
})
export class SharedModule { }
