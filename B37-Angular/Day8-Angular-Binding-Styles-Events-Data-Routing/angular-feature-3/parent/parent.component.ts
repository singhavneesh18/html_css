import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public childColorName:string = "red";

  public acceptColor = (color:string) => {
    this.childColorName = color;
  }


  public profile = {
    username:"smithjohn198",
    emailid:"smith91@outlook.com",
    location:"USA",
    age:29
  }

  constructor() { }

  ngOnInit(): void {
  }

}
