import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public iduname:string = "txt-username";
  public idpwd:string = "txt-password";
  public isDisabled:boolean = true;

  public pass:string = "text-success fw-bold";
  public fail:string = "text-danger fw-bold";
  public error:boolean = true;

  public myfavclasses = {
    'text-primary':false,
    'm-3':false,
    'p-2':true,
    'p-4':false,
    'border':false,
    'border-2':true,
    'border-warning':true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
