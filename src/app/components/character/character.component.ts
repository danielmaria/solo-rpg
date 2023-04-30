import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/interface/character';
import { DifficultyOracleDialogComponent } from '../oracle/dialogs/difficulty-oracle-dialog/difficulty-oracle-dialog.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character: Character | undefined = undefined
  @Output() healthEvent = new EventEmitter<boolean>();
  @Output() sanityEvent = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog){}

  addHealth(addHealth: boolean) {
    this.healthEvent.next(addHealth)
  }
  addSanity(addSanity: boolean) {
    this.sanityEvent.next(addSanity)
  }

  openStatusDialog(title: string, modifier: number) {
    const dialogRef = this.dialog.open(DifficultyOracleDialogComponent, {
      data: {
        title: title,
        description: `For actions you think is relatad of your character status ${title}`,
        modifier: modifier
      }
    });
  }
}
