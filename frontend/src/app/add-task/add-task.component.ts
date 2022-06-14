import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { TasksService } from '../services/tasks.service';

// export interface Task {
//   id: number;
//   label: string;
//   discription: string;
//   type: string;
//   dueDate: Date;
//   selectedType: string;
//   }
interface TypeTask {
  value: string;
  viewValue: string;
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
    type: 'work',
    dueDate: '',
  }

  types_: TypeTask[] = [
    {value: 'work-0', viewValue: 'Work'},
    {value: 'personnel-1', viewValue: 'Personnel'},
    {value: 'growth-2', viewValue: 'Growth'},
  ];

  constructor( public dialogRef: MatDialogRef<AddTaskComponent>, public taskService: TasksService) {
  }

  task = {}

  getOptionValue() {
  }

  // submit data of tasks
  submitData() {
    const data = {
      label : this.body.label,
      discription : this.body.discription,
      dueDate : this.body.dueDate,
      type : this.body.type,
    }
    this.taskService.createTask(data)
    .subscribe(response => {
      // console.log(response)
    })
  }

  // for close btn
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
