import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
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
import { AuthService } from './shared/auth/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AddEditProjectsComponent } from './projects/add-edit-projects/add-edit-projects.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { UserDashboardComponent } from './user-profile/user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
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
    AddEditProjectsComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    ToDoListComponent,
    UserDashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})

export class AppModule {

}


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

