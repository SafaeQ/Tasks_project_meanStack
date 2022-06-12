import { AuthGuard } from './guard/auth.guard';
import { TasksComponent } from './tasks/tasks.component';
import { SignupComponent } from './authComponent/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authComponent/login/login.component';

const routes: Routes = [
  {path: '',redirectTo:'login',  pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'tasks', component: TasksComponent, },//canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
