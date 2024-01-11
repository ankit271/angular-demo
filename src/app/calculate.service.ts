import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  addNumber(x : number, y:number){
    return x + y;
  }

  minusNumber(x : number, y:number):number{
    return x - y;
  }

}
