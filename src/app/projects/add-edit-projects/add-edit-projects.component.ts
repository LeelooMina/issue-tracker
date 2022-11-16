import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/shared/project.model';
import { ProjectService } from 'src/app/shared/project.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/auth/user.model';

@Component({
  selector: 'app-add-edit-projects',
  templateUrl: './add-edit-projects.component.html',
  styleUrls: ['./add-edit-projects.component.css']
})

export class AddEditProjectsComponent implements OnInit {

  ID: string;

  private userSub: Subscription;

  user: string;

  projectName: string;
  projectDesc: string;
  project: any;

  addOrEdit: string;

  publicView: boolean;


  onSubmit(addProject: NgForm){

    if(this.ID === 'add'){

  let project: Project  = {
    name: addProject.value.projectName,
  description: addProject.value.projectDes,
  admin: this.authService.userEmail,
  allowedUsers: addProject.value.allowedUsers,
  ID: '0',
  publicView: this.publicView }

  console.log(this.publicView)

  this.projectService.postProjects(project);
  this.router.navigate(['/projects'])

  
    } else {
      let project: Project  = {
        name: this.projectName,
      description: this.projectDesc,
      admin: this.authService.userEmail,
      allowedUsers: addProject.value.allowedUsers,
      ID: this.ID }

      this.projectService.updateProject(project);
      this.router.navigate(['/projects'])

    }

}


  constructor(private projectService: ProjectService, private authService: AuthService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userSub = this.authService.user.subscribe(user => {

    })

    this.route.params.subscribe(params => {
      this.ID = params['id'];
      this.addOrEdit = this.ID === 'add' ? 'Add' : 'Edit'
      })

      if(this.ID != 'add'){
       this.projectService.getProject(this.ID).subscribe(pro => {
        this.projectName = pro.body['name'];
        this.projectDesc = pro.body['description'];
        this.publicView = pro.body['publicView']
        }) }



        // this.projectName = JSON.parse(pro.name);
        // this.projectDesc = this.project.description;
       }





  }


