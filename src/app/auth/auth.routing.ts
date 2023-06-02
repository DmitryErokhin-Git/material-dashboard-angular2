import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }