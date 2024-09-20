import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos: Todo[] = []
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      done: ''
    })
  }

  addTodo() {
    this.todos.push({
      title: this.form.value.title,
      done: false
    })
    this.form.reset()
  }
}


interface Todo{
  title: string;
  done: boolean;
}
