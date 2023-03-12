import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/models/Article';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item:any
  @Input() condition:any

  @Output() send=new EventEmitter<number>();

  deleteFromDad(id:number){
    this.send.emit(id);
  }

}
