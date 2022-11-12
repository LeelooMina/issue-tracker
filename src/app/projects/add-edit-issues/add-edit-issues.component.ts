import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'firebase/auth';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Issue } from 'src/app/shared/issue.model';
import { IssueService } from 'src/app/shared/issue.service';

@Component({
  selector: 'app-add-edit-issues',
  templateUrl: './add-edit-issues.component.html',
  styleUrls: ['./add-edit-issues.component.css']
})
export class AddEditIssuesComponent implements OnInit {
  ID: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, public router: Router, private issueService: IssueService) { }

  onSubmit(addProject: NgForm){
    console.log("email", this.authService.loggedInUser.email)
  let issue: Issue  = {
    title: addProject.value.projectName,
  description: addProject.value.projectDes,
  user: this.authService.loggedInUser.email,
  type: addProject.value.allowedUsers,
  projectID: this.ID,
  ID: 0 }

  this.issueService.postIssues(issue, this.ID);
  this.router.navigate(['/projects'])

  console.log(issue);

}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ID = params['id'];
  })
  }

}
