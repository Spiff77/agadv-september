import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterFormComponent } from './counter-form.component';

describe('CounterFormComponent', () => {
  let component: CounterFormComponent;
  let fixture: ComponentFixture<CounterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterFormComponent]
    });
    fixture = TestBed.createComponent(CounterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
