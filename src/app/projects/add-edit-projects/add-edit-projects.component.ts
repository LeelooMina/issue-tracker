import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Project } from 'src/app/shared/project.model';
import { ProjectService } from 'src/app/shared/project.service';

@Component({
  selector: 'app-add-edit-projects',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css']
})

export class AddEditProjectsComponent implements OnInit {

  onSubmit(addProject){
 let project = {
    name: addProject.value.projectName,
  description: addProject.value.projectDes,
  allowedUsers: "",
  ID: 0 }

  this.projectService.postProjects(project);

  console.log(addProject.value);

}


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
