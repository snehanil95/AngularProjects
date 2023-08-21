import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaddeditComponent } from './empaddedit.component';

describe('EmpaddeditComponent', () => {
  let component: EmpaddeditComponent;
  let fixture: ComponentFixture<EmpaddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaddeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpaddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
