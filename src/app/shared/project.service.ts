import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { doc, setDoc } from 'firebase/firestore';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { AuthService } from './auth/auth.service';

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
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [];
projectSubject = new Subject<Project[]>();
  getProjects() {
    // this.fetchProjects();
    return this.projects.slice();
  }

  postProjects(project: Project) {
    this.http
      .post(
        'https://it-db-ad530-default-rtdb.firebaseio.com/projects.json',
        project,
        {
          observe: 'response',
        }
      )
      .subscribe((responseData) => {
        this.projects.push(project);
        this.projectSubject.next(this.getProjects())
        console.log(responseData);
      });
  }

  // private fetchProjects() {
  //   this.http
  //     .get('https://it-db-ad530-default-rtdb.firebaseio.com/projects.json')
  //     .pipe(
  //       map((respData) => {
  //         let projectArr = [];
  //         for (let key in respData) {
  //           projectArr.push({ ...respData[key], ID: key });
  //         }
  //         return projectArr;
  //       })
  //     )
  //     .subscribe((project) => {});
  // }

  deleteProject(project: Project) {
    let alertResp = confirm(`Do you really want to delete ${project.name}?`);
    if (alertResp) {
      return this.http.delete(
        `https://it-db-ad530-default-rtdb.firebaseio.com/projects/${project.ID}.json`,
        {
          observe: 'response',
        }
      );
    } else {
      alert(`${project.name} was saved from the fire. This time.`);
    }
  }

  getProjectDesc(projectID) {
    this.http
      .get(
        `https://it-db-ad530-default-rtdb.firebaseio.com/projects/${projectID}.json`
      )
      .pipe(
        map((respData) => {
          return respData
        })
      );
      return null;

  }

  // private fetchProjects(){
  //   this.http.get('https://it-db-ad530-default-rtdb.firebaseio.com/projects.json').pipe(map(respData => {
  //     let projectArr = [];
  //     for(let key in respData){
  //       if(respData[key].allowedUsers.includes(this.authService.loggedInUser.email)){
  //       projectArr.push({ ...respData[key], ID: key})
  //     }}
  //     return projectArr;
  //   }))
  //   .subscribe(project => {

  //     console.log("payload", project);
  //     this.projects = project;

  //     // this.projects.push(project)

  //     // Add a subject to call next
  //   })
  //   //emit new project
  //   //filter out projects by user currently logged in
  // }

  onFetchProjects(user) {
    return this.http
      .get(
        `https://it-db-ad530-default-rtdb.firebaseio.com/projects.json?orderBy="allowedUsers"&startAt="${user}"&endAt="${user}"`
      )
      .pipe(
        map((respData) => {
          let projectArr = [];
          for (let key in respData) {
            projectArr.push({ ...respData[key], ID: key });
          }
          console.log(projectArr);
          return projectArr;
        })
      );
  }

  constructor(private http: HttpClient, private authService: AuthService) {}
}
