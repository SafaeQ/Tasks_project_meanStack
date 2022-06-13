import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TasksService } from '../services/tasks.service';

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
    type: '',
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
      console.log(response)
    })
  }

  // for close btn
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
