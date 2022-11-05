import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddEditProjectsComponent } from './projects/add-edit-projects/add-edit-projects.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignInComponent } from './signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';

const routes: Routes = [
  {
    path: 'signin',
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
    path: 'edit-project',
    component: AddEditProjectsComponent
  },
  {
    path: 'project-view',
    component: ProjectViewComponent
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
