import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccComponent } from './create-acc.component';

describe('CreateAccComponent', () => {
  let component: CreateAccComponent;
  let fixture: ComponentFixture<CreateAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccComponent]
    });
    fixture = TestBed.createComponent(CreateAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
