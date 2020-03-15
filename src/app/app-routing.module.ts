import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { WelcomeEmployeeAppComponent } from './welcome-employee-app/welcome-employee-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailInfoComponent } from './employee-detail-info/employee-detail-info.component';


const routes: Routes = [
  {path:'employeeList',component:EmployeeListComponent},
  {path:'employeeDetails',component:EmployeeDetailsComponent},
  {path:'employeeDetails/:id',component:EmployeeDetailInfoComponent},
  {path:'',component:WelcomeEmployeeAppComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
