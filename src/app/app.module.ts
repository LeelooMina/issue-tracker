import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidebarComponent } from './navbar/sidebar/sidebar.component';
import { ProjectViewComponent } from './projects/project-view/project-view.component';
import { IssueDetailsComponent } from './projects/issue-details/issue-details.component';
import { AddEditIssuesComponent } from './projects/add-edit-issues/add-edit-issues.component';
import { CommentsComponent } from './projects/comments/comments.component';
import { SettingsComponent } from './user-profile/settings/settings.component';
import { ProjectGroupsComponent } from './user-profile/project-groups/project-groups.component';
import { ProjectAdminPageComponent } from './user-profile/project-admin-page/project-admin-page.component';
import { UserSettingsComponent } from './user-profile/user-settings/user-settings.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    LogInComponent,
    UserProfileComponent,
    SidebarComponent,
    ProjectViewComponent,
    IssueDetailsComponent,
    AddEditIssuesComponent,
    CommentsComponent,
    SettingsComponent,
    ProjectGroupsComponent,
    ProjectAdminPageComponent,
    UserSettingsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
