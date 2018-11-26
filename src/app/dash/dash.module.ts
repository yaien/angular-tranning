import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';

@NgModule({
  exports: [ 
    MasterComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [MasterComponent]
})
export class DashModule { }
