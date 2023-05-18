import { Component, Input, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() itemFilho!: Item;  //propriedade de entrada, ou seja, informação vem do pai App Component

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

}
