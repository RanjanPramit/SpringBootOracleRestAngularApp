import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService : EmployeeService, private _router:Router) {
  }

  ngOnInit() {
    return this._employeeService.getEmployees().subscribe(data=>this.employees=data);
  }

  onSelect(employee){
    this._router.navigate(['/employeeDetails',employee.id]);
  }

}
