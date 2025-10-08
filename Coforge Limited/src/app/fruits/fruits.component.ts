import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/*
Angular Components to demonstrate Structural Directives
CommonModule - Implementing Structural Directives- ngIf, ngFor, ngSwitch
FormsModule - Implementing Attribute Directive & 2 way Binding - ngModel
*/
@Component({
  selector: 'app-fruits',
  imports: [CommonModule,FormsModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {
  show = true;
  view='list';
  fruits=['Apple','Banana','Mango','Orange','Kiwi'];

  toggleShow(){
    this.show=!this.show;
  }

   products = [
    { name: 'Laptop', price: 85000, inStock: true },
    { name: 'Smartphone', price: 35000, inStock: false },
    { name: 'Headphones', price: 2500, inStock: true },
    { name: 'Smartwatch', price: 12000, inStock: false },
    { name: 'Keyboard', price: 1500, inStock: true },
    { name: 'Optical Mouse', price: 999, inStock: true }
  ];

  highlightExpensive(price: number) {
    return price > 10000 ? 'expensive' : 'affordable';
  }
  
}

