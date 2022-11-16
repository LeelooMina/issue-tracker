import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AddEditProjectsComponent } from './projects/add-edit-projects/add-edit-projects.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignInComponent } from './signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { AddEditIssuesComponent } from './projects/add-edit-issues/add-edit-issues.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { IssueDetailsComponent } from './projects/issue-details/issue-details.component';

const routes: Routes = [
  {
    path: 'sign/:id',
    component: SignInComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'project/:id',
    component: AddEditProjectsComponent
  },
  {
    path: 'project-view/:id/:name',
    component: ProjectViewComponent
  },
  {
    path: 'add-issue/:id/:name',
    component: AddEditIssuesComponent
  },
  {
    path: 'todolist',
    component: ToDoListComponent
  },
  {
    path: 'issue-details/:id',
    component: IssueDetailsComponent
  },


  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
