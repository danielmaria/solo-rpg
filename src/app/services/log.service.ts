import { Injectable } from '@angular/core';
import { CharacterService } from './character.service';

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

  constructor(private characterService: CharacterService) {
    this.logs = []
  }

  addLog(log: string) {
    const dateNow = new Date().toLocaleString('en-GB', {
      hour12: false,
    });
    this.characterService.addLog(`${dateNow} - ${log}`)
  }
}
