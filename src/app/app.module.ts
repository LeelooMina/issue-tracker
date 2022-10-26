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

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SignInComponent } from './signin/signin.component';
import { AuthService } from './shared/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';




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
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})

export class AppModule {

}


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

