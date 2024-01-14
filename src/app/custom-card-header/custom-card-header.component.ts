import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-card-header',
  standalone: true,
  imports: [],
  templateUrl: './custom-card-header.component.html',
  styleUrl: './custom-card-header.component.css'
})
export class CustomCardHeaderComponent {
    text?: string;
}
