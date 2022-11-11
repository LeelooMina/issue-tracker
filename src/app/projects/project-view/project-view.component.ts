import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from 'src/app/shared/issue.service';
import { Issue } from 'src/app/shared/issue.model';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  ID: string;

  issueList: Issue[] = [];

  constructor(private route: ActivatedRoute, private issueService: IssueService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ID = params['id'];
  })
  this.issueList = this.issueService.getIssues()
}

}
