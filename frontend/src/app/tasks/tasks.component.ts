import { Router } from '@angular/router';
import { TasksService } from './../services/tasks.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any;

  constructor(private auth: AuthService,public dialog: MatDialog, public taskService: TasksService, private router: Router ) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe((data)=>{
      this.tasks = data;
    })
  }

  deleteTask(id: string){
    this.taskService.deleteData(id).subscribe(() => {this.tasks = this.tasks.filter(task => task._id != id)})
  }

  openDialogEdit(id:string){
    console.log(id);
    this.dialog.open(EditTaskComponent,{data:this.tasks.find(el=>{return el._id == id;})}).afterClosed().subscribe((res)=>{
      this.ngOnInit()
    })
  }

  onLogout(){
    localStorage.removeItem('token')
    this.auth.navigateToLogin()
  }

  openDialogAdd(tasks: any): void {
    console.log(tasks);
    this.dialog.open(AddTaskComponent, {
      data: {
        tasks: tasks
      }
    }).afterClosed().subscribe(res=>{
      this.ngOnInit()
    })
  }
}
