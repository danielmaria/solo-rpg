import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-npc-oracle-dialog',
  templateUrl: './npc-oracle-dialog.component.html',
  styleUrls: ['./npc-oracle-dialog.component.scss']
})
export class NpcOracleDialogComponent {
  constructor(private logService: LogService,
    public dialogRef: MatDialogRef<NpcOracleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  names = {
    man: ["Liam", "Noah", "Oliver", "James", "William", "Benjamin", "Lucas", "Henry", "Theodore"],
    woman: ["Olivia", "Emma", "Charlotte", "Amelia", "Avan", "Ana", "Sophia", "Isabella", "Mia", "Evelyn", "Harper"]
  }
  secondName = []

  dialogResult: string | undefined = undefined;
  genererSelected: string = ''
  geners = ['Man', 'Woman']

  save() {
    this.logService.addLog("")
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  roll() {
  //  this.dialogResult = 
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
