import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { DashModule } from "./dash/dash.module";
import { RoutingModule } from "./routing/routing.module";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, DashModule, RoutingModule, RouterModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
