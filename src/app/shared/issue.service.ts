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
import { Project } from './project.model';
import { ToDo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[];

issueSubject = new Subject<Issue[]>();

  getIssues(){
    return this.issues.slice();
  }

  postIssues(issue: Issue){

    this.http.post(
        `https://it-db-ad530-default-rtdb.firebaseio.com/issues.json`,
        issue,
        {
          observe: 'response'
        }
      )
      .subscribe(
        (responseData) => {

          this.issueSubject.next(this.getIssues())
          console.log(responseData);
        },
      );

  }


  deleteIssue(issue: Issue, projectID){
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

  claimIssue(issue){

    if(issue.claimed){
      issue.claimed = false;
    issue.claimedBy = ''

    //remove todo
  }else {
    issue.claimed = true;
    issue.claimedBy = this.authService.userEmail;

    

    return this.http.patch(
       `https://it-db-ad530-default-rtdb.firebaseio.com/issues/${issue.ID}/.json`, issue,
       {
         observe: 'response',
       }
     )
  }


  }

  unClaimIssue(issue){

  }

  onFetchIssues(projectID){

    return this.http.get(
      `https://it-db-ad530-default-rtdb.firebaseio.com/issues.json?orderBy="projectID"&startAt="${projectID}"&endAt="${projectID}"`)
      .pipe(

      map((respData) => {
        let projectArr = [];
        for (let key in respData) {
          if(respData.hasOwnProperty(key)){projectArr.push({ ...respData[key], ID: key });
        }}
        console.log(projectArr);
        return projectArr;
      })
      );
    }






  constructor(private http: HttpClient, private authService: AuthService) { }
}
