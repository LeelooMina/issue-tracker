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

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.ID = params['id'];
      })

  this.route.params.subscribe(params => {
    this.projectName = params['name'];
})
  this.issueList = this.issueService.getIssues()


  }
}

