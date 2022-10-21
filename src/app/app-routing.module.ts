import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
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
