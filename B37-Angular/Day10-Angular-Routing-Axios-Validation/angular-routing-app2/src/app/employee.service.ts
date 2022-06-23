import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private rootURL = "http://localhost:3000";

  constructor(public http:HttpClient) { }

  getEmployees = () => {
    return this.http.get<any>(`${this.rootURL}/employees`);
  }

  saveEmployee = (empdetails:any) => {
    return this.http.post<any>(`${this.rootURL}/employees`,empdetails);
  }

  deleteEmployee = (id:number) => {
    return this.http.delete<any>(`${this.rootURL}/employees/${id}`);
  }

  
}
