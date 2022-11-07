import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { doc, setDoc } from "firebase/firestore";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { AuthService } from './auth.service';


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];




  getProjects(){
    this.fetchProjects();
    return this.projects.slice();
  }

  postProjects(project){
    //https://console.firebase.google.com/u/0/project/it-db-ad530/database/it-db-ad530-default-rtdb/data/~2F

    this.http.post(
        'https://it-db-ad530-default-rtdb.firebaseio.com/projects.json',
        project,
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

   deleteProjects(projectID){
    this.http.delete(
      `https://it-db-ad530-default-rtdb.firebaseio.com/projects/${projectID}`,
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

  private fetchProjects(){
    this.http.get('https://it-db-ad530-default-rtdb.firebaseio.com/projects.json').pipe(map(respData => {
      let projectArr = [];
      for(let key in respData){
        projectArr.push({ ...respData[key], ID: key})
      }
      return projectArr;
    }))
    .subscribe(project => {

      console.log("payload", project);
      this.projects = project;

      // this.projects.push(project)

      // Add a subject to call next
    })
    //emit new project
    //filter out projects by user currently logged in
  }


  onFetchProjects(){
    return this.http.get('https://it-db-ad530-default-rtdb.firebaseio.com/projects.json').pipe(map(respData => {
      let projectArr = [];
      for(let key in respData){
        if (respData[key].allowedUsers.email.includes(this.authService.loggedInUser.email)){
        projectArr.push({ ...respData[key], ID: key})}
      }
      return projectArr.filter(p => p.allowedUsers.includes(this.authService.loggedInUser.email));
    }))
  }


  constructor(private http: HttpClient, private authService: AuthService) { }
}
