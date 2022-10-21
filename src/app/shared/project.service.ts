import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [{
    name: "Project 1",
    description: "describe project",
    allowedUsers: ["username / ID", "User2"],
    ID: 1
  },
  {
    name: "Project 2",
    description: "describe project",
    allowedUsers: ["username / ID", "User2"],
    ID: 2
  },
  {
    name: "Project 3",
    description: "describe project",
    allowedUsers: ["username / ID", "User2"],
    ID: 3
  }]

  getProjects(){
    return this.projects.slice();
  }

  constructor() { }
}
