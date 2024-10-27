import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ForgottenpassComponent} from './components/forgottenpass/forgottenpass.component';

export const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgottenpass', component: ForgottenpassComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];
