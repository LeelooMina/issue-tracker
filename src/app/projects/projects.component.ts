import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth/auth.service';
import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  constructor(private projectService: ProjectService, private authService: AuthService) {}

  projectList: Project[] = [];









  loadProject(project) {
    console.log(project);
  }

  onDelete(project) {
    this.projectService.deleteProject(project).subscribe((responseData) => {
      this.projectService.onFetchProjects(this.authService.userEmail).subscribe((payload) => {
        this.projectList = payload;
      });

    });

    alert(`${project.name} is now gone forever.`);
  }

  ngOnInit(): void {

    this.projectService.onFetchProjects(this.authService.userEmail).subscribe((payload) => {
      this.projectList = payload;
    });

  this.projectService.projectSubject.subscribe((project) => {
      this.projectService.onFetchProjects(this.authService.userEmail).subscribe((payload) => {
        this.projectList = payload;
    });
  })
  }

  ngOnDestroy() {

  }






  // onClickSearch() {
  //   this.projectService.onFetchProjects(this.user).subscribe((payload) => {
  //     this.projectList = payload;
  //   });
  // }
}
