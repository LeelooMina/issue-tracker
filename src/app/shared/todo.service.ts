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
  private todos: ToDo[] = [{
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  },
  {
    title: "Title",
    description: "describe issues",
    createdBy: "username / ID",
    type: "Bug",
    issueID: '1',
    userID: 'blankpage@gmail.com',

  }]


  private todos: ToDo[];

  todoSubject = new Subject<ToDo[]>();

  userEmail = this.authService.userEmail;


  getToDos(){
    return this.todos.slice();
  }

  postIssues(issue: Issue, projectID){

    this.http.post(
        `https://it-db-ad530-default-rtdb.firebaseio.com/issues/${projectID}.json`,
        issue,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
      );

  }


  deleteIssue(issue: Issue, projectID){
    let alertResp = confirm(`Do you really want to delete ${issue.title}?`)
    if (alertResp){
      return this.http.delete(
        `https://it-db-ad530-default-rtdb.firebaseio.com/Issues/${projectID}.json`,
        {
          observe: 'response'
        }
      )

    }
    else{
      alert(`${issue.title} was saved from the fire. This time.`)
    }
  }

  getSingleIssue(issueID){

  }

  onFetchIssues(projectID){

    return this.http.get(`https://it-db-ad530-default-rtdb.firebaseio.com/issues.json?orderBy="Project_ID"&startAt="${projectID}"&endAt="${projectID}"`).pipe(map(respData => {
      let issueArr = [];
      for(let key in respData){

        issueArr.push({ ...respData[key], ID: key})

      }
      console.log(issueArr)
      return issueArr;
    }))
  }





  constructor(private http: HttpClient, private authService: AuthService) { }
}
