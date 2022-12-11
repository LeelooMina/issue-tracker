import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
  constructor(private projectService: ProjectService, private authService: AuthService, private router: Router) {}

  projectList: Project[] = [];

  myProjectView: boolean = true;
  publicProjectView: boolean = false;
  searchView: boolean = false;

  searchTerm: string = ""


  loadProject(project) {
    console.log(project);
  }

  onDelete(project: Project) {
    if(project.admin === this.authService.userEmail){


    this.projectService.deleteProject(project).subscribe((responseData) => {
      this.projectService.onFetchProjects(this.authService.userEmail).subscribe((payload) => {
        this.projectList = payload;
      });

    });

    alert(`${project.name} is now gone forever.`);
  } else{
    alert("Sorry you aren't authorized to delete this project")
  }
  }

  onEdit(project: Project){
    if (this.authService.userEmail === project.admin){
      this.router.navigate(['/project', project.ID])

    }else{
      alert("Sorry you aren't authorized to edit this project")
    }
  }

  onChangeNav(view: string){
    this.myProjectView = !this.myProjectView
    this.publicProjectView = !this.publicProjectView

    if(view === 'myProjects'){
      this.projectService.onFetchProjects(this.authService.userEmail).subscribe((payload) => {
        this.projectList = payload;
      });
    }
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






  onClickSearch() {
    this.projectService.onFetchProjects(this.searchTerm).subscribe((payload) => {
      this.projectList = payload;
    });
  }
}
