import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { JobPostComponent } from './job-post/job-post.component';
import { CandHomeComponent } from './cand-home/cand-home.component'
import { ProfileSelectComponent } from './profile-select/profile-select.component'
import { SignupseekComponent } from './signupseek/signupseek.component'
import {RecHomeComponent} from './rec-home/rec-home.component'
import {ProfileseekComponent} from './profileseek/profileseek.component'
import {RecprofileComponent} from './recprofile/recprofile.component'
import { ViewjobComponent } from './viewjob/viewjob.component'
import {DashboardComponent} from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component:  ProfileComponent},
  { path: 'jobpost', component:  JobPostComponent},
  { path: 'candhome', component:  CandHomeComponent},
  // { path: 'rechome', component:  RecHomeComponent},
  { path: 'candhome',     loadChildren: () => import('./cand-home/cand-home.component').then(m => m.CandHomeComponent)},
  { path: 'selectprofile', component:  ProfileSelectComponent},
  { path: 'seekersignup', component:  SignupseekComponent},
  { path: 'seekprofile', component:  ProfileseekComponent},
  { path: 'recprofile', component:  RecprofileComponent},
  { path: 'viewjob', component:  ViewjobComponent},
  { path: 'dashboard', component:  DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
