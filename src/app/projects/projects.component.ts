import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }
  projectList: Project[] = []

  ngOnInit(): void {
    this.projectList = this.projectService.getProjects();

this.projectService.onFetchProjects().subscribe((payload)=>{
this.projectList = payload
})
    // Subscribe to that subject here
  }

}
