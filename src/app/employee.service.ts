import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  private _url =  "http://localhost:8080/getAllEmployees";
  private newUrl;
   
  constructor(private http:HttpClient) { 
   }

  public getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  public getEmployeesById(id:number):Observable<IEmployee[]>{
    this.newUrl = this._url+"/"+id;
    return this.http.get<IEmployee[]>(this.newUrl);
  }
}
