import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  @Input("userprofile")
  public userobject:any;

  @Output()
  public handleEvent = new EventEmitter<string>();

  public color="yellow";

  public setColor = (colorName:string) => {
    this.handleEvent.emit(colorName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
