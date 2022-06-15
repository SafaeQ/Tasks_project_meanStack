import { AuthGuard } from './guard/auth.guard';
import { TasksComponent } from './tasks/tasks.component';
import { SignupComponent } from './authComponent/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authComponent/login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {path: '',redirectTo:'login',  pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'tasks', component: TasksComponent,canActivate: [AuthGuard] },
  {path: 'new-task', component: AddTaskComponent,canActivate: [AuthGuard] },
  {path: 'edit-task/:id', component: EditTaskComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
