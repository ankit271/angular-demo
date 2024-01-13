import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CalculateService } from './calculate.service';
import { ListComponent } from './list/list.component';
import { Product } from '../product';
import { log } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Tutorial';
  formValidity: boolean = false;
  message: string = '';
  name = '';
  price = '';  
  totalCost: any =0;
  username: string = '';
  info: any = '';
  constructor(private calculateService : CalculateService ){

  }
  
  products: Product[] = [];

  getTotalCost(){
    this.totalCost = this.calculateService.addNumber(10,20);  
  }
  changeMessage(){

    const newProduct = {
      product_name: this.name,
      product_price: parseInt(this.price),
      product_id: this.products.length + 1
    };
    console.log(newProduct);
    this.products.push(newProduct);
    this.message = 'Product Added Successfully.';
    //this.formValidity = true;
  }

  getInfo(username:string){
      this.username = username;      
  }

}
