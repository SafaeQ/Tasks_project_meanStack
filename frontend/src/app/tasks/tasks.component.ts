import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private auth: AuthService,private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  openAddBtn(){
    this.dialogRef.open(AddTaskComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }
  openEditBtn(){
    this.dialogRef.open(EditTaskComponent, {
      data: {
        name: 'safa'
      }
    })
  }
  onLogout(){
    localStorage.removeItem('token')
    console.log('logout');
    this.auth.navigateToLogin()
  }
}
