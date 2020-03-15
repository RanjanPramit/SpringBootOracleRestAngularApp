import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail-info',
  templateUrl: './employee-detail-info.component.html',
  styleUrls: ['./employee-detail-info.component.css']
})
export class EmployeeDetailInfoComponent implements OnInit {

  public employeeId ;

  public employees=[];

  constructor(private _activatedRoute : ActivatedRoute, private _employeeService:EmployeeService) { }

  ngOnInit() {
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.employeeId = id;

    return this._employeeService.getEmployeesById(id).subscribe(data=>this.employees=data);
  }

}
