import { Router } from '@angular/router';
import { Component, OnInit, NgModule, Inject, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksComponent } from '../tasks/tasks.component';


export interface Task {
  id?: string;
  label: string;
  discription: string;
  type: string;
  dueDate: string;
  }
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
    // @Output() callCreate = new EventEmitter<boolean>();
    body = {
      label: '',
      discription: '',
      type: '',
      dueDate: "",
  }

  constructor( private router:Router, public taskService: TasksService,  public dialogRef: MatDialogRef<TasksComponent>,@Inject(MAT_DIALOG_DATA) public data: Task,) {
  }

  ngOnInit(): void {
    // this.submitData()
  }

  // submit data of tasks
  submitData() {
    const task = {
      label : this.body.label,
      discription : this.body.discription,
      dueDate : this.body.dueDate,
      type : this.body.type,
    }
    this.taskService.createTask(task)
    .subscribe(() => {
      console.log(task, 'dddddddd');
      // this.callCreate.emit(true);
      // this.tasks = [task, ...this.tasks]
    })
    this.onNoClick()
  }

  backtoTasks(): void {
    this.router.navigateByUrl('/tasks');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
