import { TasksService } from './../services/tasks.service';
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

  tasks: any;
  constructor(private auth: AuthService,private dialogRef : MatDialog, public taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((data)=>{
      this.tasks = data;
      console.log(data);
    })
  }

// submit data of tasks
  submitData(value: any) {
    let body = {
      label: value.label,
      discription: value.discription,
      type: value.type,
      dueDate: value.dueDate,
    }
    this.taskService.createTask(body)
    .subscribe(response => {
      console.log(response)
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
