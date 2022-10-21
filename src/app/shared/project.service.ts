import { Injectable } from '@angular/core';
import { Project } from './project.model';

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

  

  constructor() { }
}
