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

    body = {
      label: '',
      discription: '',
      type: '',
      dueDate: "",
  }

  constructor( private router:Router, public taskService: TasksService,  public dialogRef: MatDialogRef<TasksComponent>,@Inject(MAT_DIALOG_DATA) public data: Task,) {
  }

  ngOnInit(): void {
  }

  // create new task
  submitData() {
    const task = {
      label : this.body.label,
      discription : this.body.discription,
      dueDate : this.body.dueDate,
      type : this.body.type,
    }
    this.taskService.createTask(task)
    .subscribe()
    this.onNoClick()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
