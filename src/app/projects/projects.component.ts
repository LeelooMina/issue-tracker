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

  user = "blankpage@gmail.com"

  loadProject(project){
    console.log(project)
  }

  onDelete(project){
    this.projectService.deleteProject(project).subscribe(
      responseData => {
        this.projectService.onFetchProjects(this.user).subscribe((payload)=>{
          this.projectList = payload
          })
        console.log(responseData);
      },
    );

    alert(`${project.name} is now gone forever.`)
  }

  ngOnInit(): void {
    // this.projectList = this.projectService.getProjects();

this.projectService.onFetchProjects(this.user).subscribe((payload)=>{
this.projectList = payload
})
    // Subscribe to that subject here
  }

  onClickSearch(){

this.projectService.onFetchProjects(this.user).subscribe((payload)=>{
  this.projectList = payload
  })
  }

}
