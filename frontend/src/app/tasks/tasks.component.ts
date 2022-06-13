import { TasksService } from './../services/tasks.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskComponent } from '../edit-task/edit-task.component';

export interface Task {
  id: number;
  label: string;
  discription: string;
  type: string;
  dueDate: Date;
  }

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []
  constructor(private auth: AuthService,private dialogRef : MatDialog, public taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((data: Task[])=>{
      this.tasks = data;
      console.log(this.tasks);
    })
  }

  // open the button modal add
  openAddBtn(){
    this.dialogRef.open(AddTaskComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }

// open button modal edit
  openEditBtn(){
    this.dialogRef.open(EditTaskComponent, {
      data: {
        name: 'safa'
      }
    })
  }

// for button logout
  onLogout(){
    localStorage.removeItem('token')
    console.log('logout');
    this.auth.navigateToLogin()
  }


}
