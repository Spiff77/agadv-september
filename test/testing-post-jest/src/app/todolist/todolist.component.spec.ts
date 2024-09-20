import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';


describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      providers: [],
      imports:[FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item to the list', () => {
      let lis = fixture.debugElement.queryAll(By.css('ul li'))
      const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement

      expect(lis.length).toEqual(0)

      input.value = 'test'
      input.dispatchEvent(new Event('input'))

      button.click()
      fixture.detectChanges()

      expect(component.todos[0].title).toEqual('test');

      lis = fixture.debugElement.queryAll(By.css('ul li'))
      expect(lis.length).toEqual(1)

  });

});
