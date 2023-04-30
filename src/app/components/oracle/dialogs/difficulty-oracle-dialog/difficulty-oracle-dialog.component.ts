import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-difficulty-oracle-dialog',
  templateUrl: './difficulty-oracle-dialog.component.html',
  styleUrls: ['./difficulty-oracle-dialog.component.scss']
})
export class DifficultyOracleDialogComponent {
  constructor(private logService: LogService, 
    public dialogRef: MatDialogRef<DifficultyOracleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogTitle = data.title
    this.dialogText = data.description
    this.modifier = data.modifier
  }

  dialogTitle: string = "";
  dialogText: string = "";
  dialogResult: string | undefined = undefined;
  result: number = 0
  difficultSelected: any
  modifier: number 

  difficults = [
    { name: 'easy', complexity: 5 },
    { name: 'meddium', complexity: 3 },
    { name: 'hard', complexity: 1 },
  ]
  difficulty: any

  save() {
    this.logService.addLog(`${this.dialogResult} in the ${this.dialogTitle.toLowerCase()} oracle`)
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  roll() {
    let result = 0
    for (let i = 0; i <= this.difficulty.complexity; i++) {
      result = this.getRandomInt(20) + result
    }
    console.log(this.modifier)
    this.result = Math.round((result + this.modifier) / this.difficulty.complexity)
    this.dialogResult = `The result was ${this.result} of 20`
  }

  onDifficultChange() {
    this.difficulty = this.difficults.filter(d => d.name === this.difficultSelected)[0];
    
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
