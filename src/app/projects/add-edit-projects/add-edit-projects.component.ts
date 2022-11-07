import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/shared/project.model';
import { ProjectService } from 'src/app/shared/project.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-edit-projects',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css']
})

export class AddEditProjectsComponent implements OnInit {

  onSubmit(addProject: NgForm){
    console.log("email", this.authService.loggedInUser.email)
 let project = {
    name: addProject.value.projectName,
  description: addProject.value.projectDes,
  allowedUsers: this.authService.loggedInUser.email,
  ID: 0 }

  this.projectService.postProjects(project);

  console.log(project);

}


  constructor(private projectService: ProjectService, private authService: AuthService) { }

  ngOnInit(): void {
  }

}
