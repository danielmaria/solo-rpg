import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JournalComponent } from './components/journal/journal.component';
import { OracleComponent } from './components/oracle/oracle.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { LogsComponent } from './components/logs/logs.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { DialogAnimationsExampleDialog } from './components/oracle/oracle.component';

import { CharacterComponent } from './components/character/character.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    OracleComponent,
    NotebookComponent,
    LogsComponent,
    InventoryComponent,
    CharacterComponent,
    DialogAnimationsExampleDialog

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
