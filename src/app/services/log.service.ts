import { Injectable } from '@angular/core';

export class Log {
  date: Date;
  text: string;

  constructor(date: Date, text: string) {
    this.date = date
    this.text = text
  }
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private logs: Log[];

  constructor() {
    this.logs = []
  }

  getLogs() {
    return this.logs
  }

  addLog(log: string) {
    this.logs.push(new Log(new Date(), log))
  }
}
