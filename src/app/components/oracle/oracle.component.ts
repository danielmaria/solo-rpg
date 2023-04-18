import { AfterContentInit, Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService, Log } from 'src/app/services/log.service';

interface OracleMenu {
  id: string,
  name: string,
  saveable: boolean,
  description: string,
  icon: string,
  options: string[]
}

const oraclesMenu: OracleMenu[] = [
  {
    id: 'scene', 
    name: 'Scene', 
    description: '', 
    icon: 'handshake', 
    options: [],
    saveable: false
  },
  {
    id: 'description', 
    name: 'Description', 
    description: 'When you need know what something is or how it looks. Ex: “What sort of vehicle do they have?”', 
    icon: 'search', 
    options: ['Small', 'Large', 'Old', 'New', 'Mundane', 'Simple', 'Complex', 'Unsavory', 'Specialized', 'Unexpected', 'Exotic', 'Dignified', 'Unique'],
    saveable: false
  },
  {
    id: 'yes_or_no', 
    name: 'Yes or no', 
    description: 'Yes or no situation. If you think the answer is more likely to be yes, then roll twice and pick the highest result.', 
    icon: 'thumbs_up_down', 
    options: ['Yes, absolutilly yes!', 'Yes', 'Yes, but...', 'Not really', 'No', 'OMG, NO!'],
    saveable: false
  },
  {
    id: 'weapons', 
    name: 'Weapons', 
    description: 'When you need to find something that can possibly be used as an improvised weapon. Ex: "I lock the door behind me and I\'m in a room. I\'m looking for something to defend myself and I find..."', 
    icon: 'build', 
    options: ["Tennis Racket", "Metal Pipe", "Wrench", "Baseball Bat", "Cleaver", "Chain", "Penknife", "Kitchen Knife"],
    saveable: true
  },
  {
    id: 'weapons', 
    name: 'Firearm', 
    description: 'When you are in a place where there are possibly some firearms and you intend to look for them. Ex: "I enter a farm. There is no one in the house, so I look for weapons"', 
    icon: 'build', 
    options: ['Just a few gun shells', 'Old revolver with 3 bullets', 'Old revolver with loaded, but rusty', 'Taser', 'Pistol semi-automatic without bullets', 'Pepper spray', 'Fully loaded semi-automatic pistol', 'Old 2WW Rifle with a couple of bullets', 'Hunting rifle with bullets'],
    saveable: true
  },
  {
    id: 'objects', 
    name: 'Objects',
    saveable: true,
    description: 'When you are searching for something in a crime scene, when you are trapped somewhere and need to find something or you are searching a corpse. Ex: "When the vampire group start to run in my direction I search inside de trash bin and find..."', 
    icon: 'emoji_food_beverage', 
    options: ['Bottle', 'Ring', 'Photo album', 'Hair brush', 'Playing card', 'paint brush', 'Perfume', 'Bag', ' Backpack']},
  {
    id: 'places', 
    name: 'Places', 
    description: 'When you need know what you are seeing, what is the nerest place to go, or where you are. Ex: "I turn the corner I see one..."', 
    icon: 'forest', 
    options: ['Church', 'Factory', 'Department store', 'Square', 'Lake', 'Abandoned house', 'Police station', 'Hospital', 'Fire center', 'Gas station'],
    saveable: false
  },
  {
    id: 'weather', 
    name: 'Weather', 
    description: 'When you need to know how the day dawned, and how the night is after a night out at a club. Ex: "After waking up from my coma state, I look out the window and the weather seems..."', 
    icon: 'cloudy', 
    options: ['Thunder or Blizzard', 'Rain or Snow', 'Overcast or windy', 'Many clouds', 'Clear sky', 'Sunny and warm or starry sky'],
    saveable: false
  },

]

@Component({
  selector: 'app-oracle',
  templateUrl: './oracle.component.html',
  styleUrls: ['./oracle.component.scss'],

})
export class OracleComponent {
  @Output() items = new EventEmitter<any>();

  oracles = oraclesMenu

  constructor(private logService: LogService, public dialog: MatDialog){}

  openDialog(oracle: any): void {
    let enterAnimationDuration = 300
    let exitAnimationDuration = 1000
    const dialogRef = this.dialog.open(DialogAnimationsExampleDialog, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        oracle: oracle
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    const dialogSubmitSubscription = 
    dialogRef.componentInstance.submitClicked.subscribe(result => {
      this.logService.addLog(result)
      dialogSubmitSubscription.unsubscribe();
    });

    dialogRef.componentInstance.items.subscribe(result => {
      this.items.next(result)
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialogs/dialog-animations-example-dialog.html',
  styleUrls: ['./oracle.component.scss']
})
export class DialogAnimationsExampleDialog {

  @Output() submitClicked = new EventEmitter<any>();
  @Output() items = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, 
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