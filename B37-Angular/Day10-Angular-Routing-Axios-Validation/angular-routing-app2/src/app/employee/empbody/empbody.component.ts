import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empbody',
  templateUrl: './empbody.component.html',
  styleUrls: ['./empbody.component.css']
})
export class EmpbodyComponent implements OnInit {

  public departments:any[] = [
    {"location":"Chennai", "deptname":"Testing"},
    {"location":"Mumbai", "deptname":"Development"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
