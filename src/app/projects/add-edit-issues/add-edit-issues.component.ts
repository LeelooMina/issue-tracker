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
  projectName: string;

  private userSub: Subscription;

  onSubmit(addIssue: NgForm){

  let issue: Issue  = {
    title: addIssue.value.title,
    description: addIssue.value.description,
    createdBy: this.authService.userEmail,
    type: addIssue.value.type,
    projectName: this.projectName,
    projectID: this.ID,
    ID: '0',
    claimedBy: "",
    claimed: false,
    done: false
  }

  this.issueService.postIssues(issue);
  this.router.navigate(['/projects'])

  console.log(issue);

}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ID = params['id'];
      this.projectName = params['name'];
      console.log(this.ID)

  })



  this.userSub = this.authService.user.subscribe(user => {
    this.user = user;
  })
  }

}
