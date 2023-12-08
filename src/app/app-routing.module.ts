import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {SupportComponent} from "./support/support.component";
import {TaketestComponent} from "./taketest/taketest.component";
import {TipsComponent} from "./tips/tips.component";
import {SelfassessmentComponent} from "./selfassessment/selfassessment.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'support',
    component: SupportComponent,
  },
  {
    path: 'test',
    component: TaketestComponent,
  },
  {
    path: 'tips',
    component: TipsComponent,
  },
  {
    path: 'self',
    component: SelfassessmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
