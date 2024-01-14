import { Component, ViewChild } from '@angular/core';
import { CustomCardHeaderComponent } from '../custom-card-header/custom-card-header.component';
@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CustomCardHeaderComponent],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css'
})
export class CustomCardComponent {
   @ViewChild(CustomCardHeaderComponent) header?: CustomCardHeaderComponent;

   ngAfterViewInit() {
    console.log(this.header?.text);
   }
}
