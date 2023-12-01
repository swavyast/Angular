import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  id: number;
  name: string;
  price: number;
  constructor(){
    this.id = 1;
    this.name = "Laptop";
    this.price = 1_45_000;
  }
  getId():number{
    return this.id;
  }
  getName():string{
    return this.name;
  }
  getPrice():number{
    return this.price;
  }
  ngOnInit(){
  }

}
