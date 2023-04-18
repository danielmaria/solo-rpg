import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  @Input() itemList: string[] = []

  deleteItem(item: string) {
    var index = this.itemList.indexOf(item);
    if (index !== -1) {
      this.itemList.splice(index, 1);
    }
  }

}
