import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-issues',
  templateUrl: './add-edit-issues.component.html',
  styleUrls: ['./add-edit-issues.component.css']
})
export class AddEditIssuesComponent implements OnInit {
  ID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ID = params['id'];
  })
  }

}
