import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { WelcomeEmployeeAppComponent } from './welcome-employee-app/welcome-employee-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailInfoComponent } from './employee-detail-info/employee-detail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    WelcomeEmployeeAppComponent,
    PageNotFoundComponent,
    EmployeeDetailInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
