import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Character, Profession } from 'src/app/interface/character';

@Component({
  selector: 'app-character-dialog',
  templateUrl: './character-dialog.component.html',
  styleUrls: ['./character-dialog.component.scss']
})
export class CharacterDialogComponent implements OnInit {

  @Output() characterEvent = new EventEmitter<Character>();
  @Output() deleteCharacterEvent = new EventEmitter<boolean>();
  character: Character
  editableCharacter: Character | undefined
  professionSelected: any

  professions: Profession[] = [
    { name: 'Journalist', status: { physical: 1, intellectual: 3, social: 5 } },
    { name: 'Scientist', status: { physical: 2, intellectual: 5, social: 2 } },
    { name: 'Doctor', status: { physical: 1, intellectual: 5, social: 3 } },
    { name: 'Nurse', status: { physical: 3, intellectual: 3, social: 3 } },
    { name: 'Fireman', status: { physical: 4, intellectual: 2, social: 3 } },
    { name: 'Police officer', status: { physical: 3, intellectual: 2, social: 4 } },
    { name: 'Detective', status: { physical: 2, intellectual: 3, social: 4 } },
    { name: 'Athlete', status: { physical: 5, intellectual: 1, social: 3 } },
  ]

  editCharacter: any

  constructor(public dialogRef: MatDialogRef<CharacterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Character, private formBuilder: FormBuilder) {
      this.character = data
      this.editCharacter = this.formBuilder.group({
        name: ['', [
          Validators.required,
          Validators.min(1),
          Validators.max(50)
        ]],
        background: ['', [
          Validators.required,
          Validators.min(1),
          Validators.max(1000000)
        ]],
        professionName: new FormControl(this.character.occupational.name)
      });
      this.onProfessionChange()
  }


  ngOnInit(): void {
    this.editCharacter.get('name').setValue(this.character.name)
    this.editCharacter.get('background').setValue(this.character.background)
  }

  onProfessionChange() {
    let professionSelected: Profession = this.professions.filter(p => p.name === this.editCharacter.get("professionName").value)[0]
    this.professionSelected = professionSelected
  }

  save() {
    if (this.editCharacter.status === 'VALID') {
      this.character.name = this.editCharacter.get("name").value
      this.character.background = this.editCharacter.get("background").value
      this.character.occupational = this.professionSelected
      this.dialogRef.close();

      this.characterEvent.emit(this.character)
    }
  }

  closeDialog() {
    if (this.editCharacter.status === 'VALID') {
      this.dialogRef.close();
    }
  }

  deleteCharacter() {
    this.deleteCharacterEvent.next(true)
  }

}
