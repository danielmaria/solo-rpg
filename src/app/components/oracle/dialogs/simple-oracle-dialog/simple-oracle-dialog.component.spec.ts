import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOracleDialogComponent } from './simple-oracle-dialog.component';

describe('SimpleOracleDialogComponent', () => {
  let component: SimpleOracleDialogComponent;
  let fixture: ComponentFixture<SimpleOracleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleOracleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleOracleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
