import { Component } from '@angular/core';
import { Log, LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {

  logs: Log[]

  constructor(private logService: LogService){
    this.logs = this.logService.getLogs();
  }

}
