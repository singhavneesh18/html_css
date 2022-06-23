import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  public usercolor:string = "green";
  public isImportant:boolean = false;
  public status:string = "skyblue";

  public moreStyles:any = {
    color:'white',
    backgroundColor:'darkblue',
    padding:'5px',
    maring:'10px',
    border:'2px solid yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
