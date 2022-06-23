import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public sample:string = "Austrellia";

  public product:any = {
    "prodcode":"P998328",
    "prodname":"Laptop",
    "price":49000,
    "barcode":88382818818
  }

  public x:number = 182.99764;
  public discount:number = 0.09;
  public amount:number = 1800.00;
  
  constructor() { }

  ngOnInit(): void {
  }

}
