import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { doc, setDoc } from "firebase/firestore";
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
  private projects: Project[] = [{
    name: "Project 1",
    description: "describe project",
    allowedUsers: ["Admin", "User1", "User3"],
    ID: 1
  },
  {
    name: "Project 2",
    description: "describe project",
    allowedUsers: ["Admin", "User2", "User3"],
    ID: 2
  },
  {
    name: "Project 3",
    description: "describe project",
    allowedUsers: ["Admin", "User1", "User2"],
    ID: 3
  }]




  getProjects(){
    return this.projects.slice();
  }

  postProjects(){
    //https://console.firebase.google.com/u/0/project/it-db-ad530/database/it-db-ad530-default-rtdb/data/~2F

  }

  constructor() { }
}
