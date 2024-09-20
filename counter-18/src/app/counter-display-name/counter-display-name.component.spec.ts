import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDisplayNameComponent } from './counter-display-name.component';

describe('CounterDisplayNameComponent', () => {
  let component: CounterDisplayNameComponent;
  let fixture: ComponentFixture<CounterDisplayNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CounterDisplayNameComponent]
});
    fixture = TestBed.createComponent(CounterDisplayNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
