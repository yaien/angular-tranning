import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterComponent } from "./master/master.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

@NgModule({
  exports: [MasterComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [MasterComponent]
})
export class DashModule {}
