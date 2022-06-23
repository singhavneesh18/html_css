import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public empData:any[] = [];

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((response)=>{
      // console.log(JSON.stringify(response));
      this.empData = response; 
    });
  }

  deleteEmployee = (event:any) => {
    console.log(event.target.id);
    this.empService.deleteEmployee(event.target.id).subscribe(response=>{
      console.log(response);
      this.ngOnInit();
    });
  }

}
