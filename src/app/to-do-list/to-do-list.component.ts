import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { ToDo } from '../shared/todo.model';
import { ToDoService } from '../shared/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  constructor(
    private toDoService: ToDoService,
    private authService: AuthService
  ) {}

  toDoList: ToDo[] = [];

  userEmail = this.authService.userEmail;

  onMarkDone(todo) {
    let alertResp = confirm(`Do you really want to complete ${todo.title}?`);
    if (alertResp) {
      todo.done = !todo.done;

      this.toDoService.updateToDo(todo).subscribe((responseData) => {
        this.toDoService.onFetchToDos(this.userEmail).subscribe((payload) => {
          this.toDoList = payload;
          console.log('test', this.toDoList);
          // this.t
          console.log('todo Patch:', responseData);
        });
      });
      alert(`${todo.title} was removed.`)
    } else {
      alert(`${todo.title} will stay on your list.`)
    }
  }

  ngOnInit(): void {
    this.toDoService.onFetchToDos(this.userEmail).subscribe((payload) => {
      this.toDoList = payload;
      console.log('test', this.toDoList);
    });
  }
}
