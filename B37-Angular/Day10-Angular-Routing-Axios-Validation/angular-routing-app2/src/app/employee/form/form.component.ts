import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input("deptdetails")
  public parentDeparments:any[] = [];

  public cities:string[] = ["Pune", "Hyderabad","Bangalore","Chennai","Delhi","California"];
  public saveFlag:boolean = false;
  public emplist:any[] = [];
  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }

  submitForm = (form:any) => {
    console.log(JSON.stringify(form.value, null, 3));
    
    this.empService.getEmployees().subscribe(response=>{
      this.emplist = response;
    });

    console.log("emplist length = " + this.emplist.length + 1);

    form.value["id"] = 2;

    this.empService.saveEmployee(form.value).subscribe(response=>{
      if(response!=null){
        this.saveFlag = true;
      }
    });
  }
  

}
