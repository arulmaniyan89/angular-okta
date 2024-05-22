import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path:'welcome',component:WelcomeComponent, canActivate: [OktaAuthGuard]
  },
  {
    path: 'login/callback', component: OktaCallbackComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path: "", redirectTo: '/welcome', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
