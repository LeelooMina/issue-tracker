import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/shared/project.service';
import { Project } from 'src/app/shared/project.model';
import { IssueService } from 'src/app/shared/issue.service';
import { Issue } from 'src/app/shared/issue.model';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  ID: string;

  projectName: string;

  issueList: Issue[] = [];

  constructor(private route: ActivatedRoute, private issueService: IssueService, private projectService: ProjectService) { }

  onDelete(issue){
    this.issueService.deleteIssue(issue, this.ID).subscribe((res) => {

      this.issueService.onFetchIssues(this.ID).subscribe((payload) => {
        this.issueList = payload;
    })
  })

  }

  onClaim(issue){

    this.issueService.claimIssue(issue).subscribe((responseData) => {
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

