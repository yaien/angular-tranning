import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterComponent } from "./master/master.component";
import { RouterModule } from "@angular/router";

@NgModule({
  exports: [MasterComponent],
  imports: [CommonModule, RouterModule],
  declarations: [MasterComponent]
})
export class DashModule {}
