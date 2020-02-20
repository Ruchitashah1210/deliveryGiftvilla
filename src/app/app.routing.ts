import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserauthguardService } from './userauthguard.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { SignupformComponent } from './signupform/signupform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditorderComponent } from './editorder/editorder.component';

const arr: Routes = [
  { path: '', component: LoginComponent },
  { path:'signup',component:SignupformComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'editorder/:track_id',component:EditorderComponent},
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/pagenotfound' }
];
export const routingArr = RouterModule.forRoot(arr);
