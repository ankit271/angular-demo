import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from './product';
import { CalculateService } from './calculate.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Tutorial';
  formValidity: boolean = false;
  message: string = '';
  name = '';
  price = '';

  products = [
    { product_name: 'One Plus',product_price: 17000, product_id: 1 },
    { product_name: 'IPhone',product_price: 51000, product_id: 2 },
    { product_name: 'Redmi',product_price: 12000, product_id: 3 },
];

 
  changeMessage(){

    const newProduct = {
      product_name: this.name,
      product_price: parseInt(this.price),
      product_id: this.products.length + 1
    };
    console.log(newProduct);
    this.products.push(newProduct);
    this.message = 'Product Added Successfully.';
    this.formValidity = true;
  }

  private calculateService = Inject(CalculateService);
  totalCost = this.calculateService.add(10,20);

}
