import { Component, Input } from '@angular/core';
import { Log, LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {

  @Input() logs: string[] = []

  constructor(private logService: LogService){
  }

}
