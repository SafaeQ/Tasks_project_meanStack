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

  // delete task
  deleteTask(id){
    console.log(id)
    this.taskService.deleteData(id).subscribe(() => {this.tasks = this.tasks.filter(task => task._id != id)})
  }

  // open the button modal add
  openAddBtn(){
    this.dialogRef.open(AddTaskComponent);
  }

// open button modal edit
  openEditBtn(){
    this.dialogRef.open(EditTaskComponent)
  }

// for button logout
  onLogout(){
    localStorage.removeItem('token')
    console.log('logout');
    this.auth.navigateToLogin()
  }


}
