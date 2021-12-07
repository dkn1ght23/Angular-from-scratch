import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginWithEmailComponent} from "./components/login-with-email/login-with-email.component";
import {AppRegistrationComponent} from "./components/app-registration/app-registration.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginWithEmailComponent
  },
  {
    path: 'register',
    component: AppRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
