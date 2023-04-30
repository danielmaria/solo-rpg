import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcOracleDialogComponent } from './npc-oracle-dialog.component';

describe('NpcOracleDialogComponent', () => {
  let component: NpcOracleDialogComponent;
  let fixture: ComponentFixture<NpcOracleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpcOracleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcOracleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
