import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  @Input() journal: string = ""
  @Output() journalEvent = new EventEmitter<String>();

  editJournal(change: any) {
    this.journalEvent.next(change)
  }

}
