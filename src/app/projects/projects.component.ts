import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  projectList: Project[] = [];

  user = 'blankpage@gmail.com';




  loadProject(project) {
    console.log(project);
  }

  onDelete(project) {
    this.projectService.deleteProject(project).subscribe((responseData) => {
      this.projectService.onFetchProjects(this.user).subscribe((payload) => {
        this.projectList = payload;
      });

    });

    alert(`${project.name} is now gone forever.`);
  }

  ngOnInit(): void {

    this.projectService.onFetchProjects(this.user).subscribe((payload) => {
      this.projectList = payload;
    });

    this.projectService.projectSubject.subscribe((project) => {
      this.projectService.onFetchProjects(this.user).subscribe((payload) => {
        this.projectList = payload;
    });
  })
  }

  ngOnDestroy() {
    this.user = 'blankpage@gmail.com';
  }






  onClickSearch() {
    this.projectService.onFetchProjects(this.user).subscribe((payload) => {
      this.projectList = payload;
    });
  }
}
