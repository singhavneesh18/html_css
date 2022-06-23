import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpollation',
  templateUrl: './interpollation.component.html',
  styleUrls: ['./interpollation.component.css']
})
export class InterpollationComponent implements OnInit {

  public username:string = "Abhishek";
  public hostaddress:string = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

}
