import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() data: any = 0;

  @Output() getInfoEvent = new EventEmitter<string>();
}
