import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-simple-oracle-dialog',
  templateUrl: './simple-oracle-dialog.component.html',
  styleUrls: ['./simple-oracle-dialog.component.scss']
})
export class SimpleOracleDialogComponent {
  @Output() submitClicked = new EventEmitter<any>();
  @Output() items = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<SimpleOracleDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dialogTitle = data.oracle.name
      this.dialogText = data.oracle.description
  }
  
  dialogTitle: string = "";
  dialogText: string = "";
  dialogResult: string | undefined = undefined;

  save() {
    let data = ""
    if (this.data.oracle.saveable) {
      this.items.emit(this.dialogResult);
      data = `Your found "${this.dialogResult}" using the oracle "${this.dialogTitle}"`;
    } else {
      data = `Your result was "${this.dialogResult}" in the oracle "${this.dialogTitle}"`;
    }
    this.submitClicked.emit(data);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  roll() {
    let dice = this.getRandomInt(this.data.oracle.options.length)
    this.dialogResult = this.data.oracle.options[dice]
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  
}
