import { Component, OnInit } from '@angular/core';
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

import {FormBuilder, FormGroup} from '@angular/forms';

interface Todo{
  title: string;
  done: boolean;
}
