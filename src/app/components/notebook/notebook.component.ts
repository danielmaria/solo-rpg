import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent {
  @Input() notebook: string = ""
  @Output() notebookEvent = new EventEmitter<String>();

  editNotebook(change: any) {
    this.notebookEvent.next(change)
  }

}
