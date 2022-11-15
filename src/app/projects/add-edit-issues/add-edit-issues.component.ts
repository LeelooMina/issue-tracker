import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'firebase/auth';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from 'src/app/shared/auth/user.model';
import { Issue } from 'src/app/shared/issue.model';
import { IssueService } from 'src/app/shared/issue.service';

@Component({
  selector: 'app-add-edit-issues',
  templateUrl: './add-edit-issues.component.html',
  styleUrls: ['./add-edit-issues.component.css']
})
export class AddEditIssuesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService, public router: Router, private issueService: IssueService) { }
  ID: string;
  user: User;

  private userSub: Subscription;

  onSubmit(addProject: NgForm){
    console.log("email", this.authService.loggedInUser.email)
  let issue: Issue  = {
    title: addProject.value.projectName,
    description: addProject.value.projectDes,
    createdBy: this.user.email,
    type: addProject.value.allowedUsers,
    projectID: this.ID,
    ID: 0,
    claimedBy: this.user.email,
    claimed: false,
    done: false
  }

  this.issueService.postIssues(issue, this.ID);
  this.router.navigate(['/projects'])

  console.log(issue);

}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ID = params['id'];
  })
  this.userSub = this.authService.user.subscribe(user => {
    this.user = user;
  })
  }

}
