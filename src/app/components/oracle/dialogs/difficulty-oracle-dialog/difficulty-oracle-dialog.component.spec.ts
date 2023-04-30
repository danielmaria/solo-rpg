import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyOracleDialogComponent } from './difficulty-oracle-dialog.component';

describe('DifficultyOracleDialogComponent', () => {
  let component: DifficultyOracleDialogComponent;
  let fixture: ComponentFixture<DifficultyOracleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifficultyOracleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifficultyOracleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
