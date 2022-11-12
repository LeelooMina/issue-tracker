import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'firebase/auth';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Issue } from 'src/app/shared/issue.model';

@Component({
  selector: 'app-add-edit-issues',
  templateUrl: './add-edit-issues.component.html',
  styleUrls: ['./add-edit-issues.component.css']
})
export class AddEditIssuesComponent implements OnInit {
  ID: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, public router: Router) { }

  onSubmit(addProject: NgForm){
    console.log("email", this.authService.loggedInUser.email)
  let issue: Issue  = {
    name: addProject.value.projectName,
  description: addProject.value.projectDes,
  admin: this.authService.loggedInUser.email,
  allowedUsers: addProject.value.allowedUsers,
  ID: 0 }

  this.projectService.postProjects(project);
  this.router.navigate(['/projects'])

  console.log(project);

}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ID = params['id'];
  })
  }

}
