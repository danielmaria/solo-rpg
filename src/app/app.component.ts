import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDialogComponent } from './components/character-dialog/character-dialog.component';
import { Character } from './interface/character';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  characterDialog: boolean = true
  character: Character
  items: string[] = []


  constructor(private characterService: CharacterService, public dialog: MatDialog) {
    let savedCharacter = this.characterService.getLastSave()
    this.character = savedCharacter

    this.initialize()
  }

  initialize() {
    let savedCharacter = this.characterService.getLastSave()
    this.character = savedCharacter

    if (savedCharacter.name === "") {
      this.openCharacterDialog()
    }
  }

  removeItem(item: string) {
    this.characterService.removeItem(item)
  }

  addItem(newItem: string) {
    this.characterService.addItem(newItem)
  }

  addHealth(addHealth: any) {
    this.characterService.addHealth(addHealth)
  }

  addSanity(addSanity: any) {
    this.characterService.addSanity(addSanity)
  }

  editJournal(journal: any) {
    this.characterService.editJournal(journal)
  }

  editNotebook(notebook: any) {
    this.characterService.editNotebook(notebook)
  }

  showCharacterDialog() {
    this.characterDialog = !this.characterDialog
  }

  openCharacterDialog(): void {
    const dialogRef = this.dialog.open(CharacterDialogComponent, {
      data: this.character,
    });

    dialogRef.componentInstance.characterEvent.subscribe(result => {
      this.characterService.save(result)
      this.character = result
    });

    dialogRef.componentInstance.deleteCharacterEvent.subscribe(del => {
      this.characterService.delete()
      this.initialize()
      this.openCharacterDialog()
    })
  }
}
