import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {

  @Input() itemList: string[] = []
  @Output() removeItem = new EventEmitter<any>();

  constructor(private logService: LogService) {}

  deleteItem(item: string) {
    var index = this.itemList.indexOf(item);
    if (index !== -1) {
      this.itemList.splice(index, 1);
      this.removeItem.next(item);
      this.logService.addLog(`Item ${item} removed`)
    }
  }

}
