import { Component, OnInit } from '@angular/core';
import { ToDo } from '../shared/todo.model';
import { ToDoService } from '../shared/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }

  toDoList: ToDo[] = [];

  ngOnInit(): void {

    this.toDoList = this.toDoService.getToDos();
    console.log(this.toDoList)
  }

}
