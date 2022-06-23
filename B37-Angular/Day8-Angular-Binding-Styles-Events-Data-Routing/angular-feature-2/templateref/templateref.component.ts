import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.css']
})
export class TemplaterefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public readCity = (cityName:string) => {
    console.log("City is " + cityName);
  }
}
