import { Injectable } from '@angular/core';
import { Issue } from './issue.model';
import { doc, setDoc } from "firebase/firestore";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
  HttpRequest
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { ToDo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {


  private todos: ToDo[];

  todoSubject = new Subject<ToDo[]>();

  userEmail = this.authService.userEmail;


  getToDos(){
    return this.todos.slice();
  }

  postToDo(todo: ToDo){

    this.http.post(
        `https://it-db-ad530-default-rtdb.firebaseio.com/todos.json`,
        todo,
        {
          observe: 'response'
        }
      )
      .subscribe(
        (responseData) => {
          this.todos.push(todo)
          this.todoSubject.next(this.getToDos());
          console.log(responseData);
        },
      );

  }

  updateToDo(todo: ToDo){


    return this.http.patch(
      `https://it-db-ad530-default-rtdb.firebaseio.com/todos/${todo.ID}/.json`,
      todo,
      {
        observe: 'response'
      }
    )



  }


  deleteToDo(issue: Issue, projectID){
    let alertResp = confirm(`Do you really want to delete ${issue.title}?`)
    if (alertResp){
      return this.http.delete(
        `https://it-db-ad530-default-rtdb.firebaseio.com/issues/${issue.ID}.json`,
        {
          observe: 'response'
        }
      )

    }
    else{
      alert(`${issue.title} was saved from the fire. This time.`)
    }
  }

  unClaimToDo(todo){

  let issue: Issue;


   this.http.patch(
      `https://it-db-ad530-default-rtdb.firebaseio.com/issues/${todo.issueID}/.json`,
      {
        observe: 'response',
      }
    ).subscribe(issueResp =>{
      this.todoSubject.next(this.getToDos())
      console.log(issueResp)
    })
  }



  onFetchToDos(userEmail){

    return this.http.get(
      `https://it-db-ad530-default-rtdb.firebaseio.com/todos.json?orderBy="userID"&startAt="${userEmail}"&endAt="${userEmail}"`)
      .pipe(

      map((respData) => {
        let issueArr = [];
        for (let key in respData) {
          if(respData.hasOwnProperty(key)){issueArr.push({ ...respData[key], ID: key });
        }}
        console.log(issueArr);
        return issueArr;
      })
      );
    }






  constructor(private http: HttpClient, private authService: AuthService) { }
}

