import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { GoalsComponent } from './components/views/goals/goals.component';
import { MeasurementsComponent } from './components/views/measurements/measurements.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GoalsComponent,
    MeasurementsComponent,
    ToastsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
	NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
