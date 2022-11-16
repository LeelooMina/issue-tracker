import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from 'src/app/shared/project.model';
import { IssueService } from 'src/app/shared/issue.service';
import { Issue } from 'src/app/shared/issue.model';
import { ToDo } from 'src/app/shared/todo.model';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ToDoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  ID: string;

  projectName: string;

  issueList: Issue[] = [];

  constructor(private route: ActivatedRoute, private issueService: IssueService, private projectService: ProjectService, private authService: AuthService, private toDoService: ToDoService) { }

  onDelete(issue){
    this.issueService.deleteIssue(issue, this.ID).subscribe((res) => {

      this.issueService.onFetchIssues(this.ID).subscribe((payload) => {
        this.issueList = payload;
    })
  })

  }

  onClaim(issue){

    this.issueService.claimIssue(issue).subscribe((responseData) => {

      let todo: ToDo = {
        title: issue.title,
        description: issue.description,
        createdBy: issue.createdBy,
        type: issue.type,
        issueID: issue.ID,
        userID: this.authService.userEmail,
        todo: true,
        doing: false,
        done: false,
      }

      this.toDoService.postToDo(todo);
      
      this.issueService.onFetchIssues(this.ID).subscribe((payload) => {
        this.issueList = payload;
    })
    });


  }






  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.ID = params['id'];
      this.projectName = params['name'];

      this.issueService.issueSubject.subscribe((issue) => {
        this.issueService
        console.log(issue)
    });

      this.issueService.onFetchIssues(this.ID).subscribe((payload) => {
        this.issueList = payload;
        console.log('test', this.issueList)


    })




    })
// this.issueList = this.issueService.getIssues()


  }
}

