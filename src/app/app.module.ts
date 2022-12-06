import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { JobPostComponent } from './job-post/job-post.component';
import { CandHomeComponent } from './cand-home/cand-home.component';
import { RecHomeComponent } from './rec-home/rec-home.component';
import { ProfileSelectComponent } from './profile-select/profile-select.component';
import { SignupseekComponent } from './signupseek/signupseek.component';
import { EditJobPostComponent } from './edit-job-post/edit-job-post.component';
import { ToastrModule } from 'ngx-toastr';
import { ProfileseekComponent } from './profileseek/profileseek.component';
import { SeekprofileComponent } from './seekprofile/seekprofile.component';
import { RecprofileComponent } from './recprofile/recprofile.component';
import { ViewjobComponent } from './viewjob/viewjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FybTrendComponent } from './fyb-trend/fyb-trend.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    JobPostComponent,
    CandHomeComponent,
    RecHomeComponent,
    ProfileSelectComponent,
    SignupseekComponent,
    EditJobPostComponent,
    ProfileseekComponent,
    SeekprofileComponent,
    RecprofileComponent,
    ViewjobComponent,
    DashboardComponent,
    EditprofileComponent,
    FybTrendComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
