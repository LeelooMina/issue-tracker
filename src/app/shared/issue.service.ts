import { Injectable } from '@angular/core';
import { Issue } from './issue.model';
import { doc, setDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [{
    title: "Title",
    description: "describe issues",
    user: "username / ID",
    type: "Bug",
    projectID: 1
  },
  {
    title: "Title",
    description: "describe issues",
    user: "username / ID",
    type: "Feature Request",
    projectID: 1
  },
  {
  title: "Title",
    description: "describe issues",
    user: "username / ID",
    type: "Future Feature",
    projectID: 1
  }]

  getIssues(){
    return this.issues.slice();
  }

  


  constructor() { }
}
