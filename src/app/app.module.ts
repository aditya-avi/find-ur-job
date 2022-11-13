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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
