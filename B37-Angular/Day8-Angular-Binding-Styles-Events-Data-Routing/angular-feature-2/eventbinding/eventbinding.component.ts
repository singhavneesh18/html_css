import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handleButtonClick = () =>{
    alert("Hello! Welcome to Event Binding");
  }

  public clickMe = (event:any) => {
    console.log(event.target.value);
  }
}
