import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

  label:string = "";
  dueDate:Date = new Date();
  description:string = "";
  type:string = "";
  completed: Boolean = false;

  types_: TypeTask[] = [
    {value: 'work-0', viewValue: 'Work'},
    {value: 'personnel-1', viewValue: 'Personnel'},
    {value: 'growth-2', viewValue: 'Growth'},
  ];

  constructor( @Inject(MAT_DIALOG_DATA) public data:any) {
    this.label = data.name
   }

  onNoClick(): void {
    // this.dialogRef.close();
  }

  ngOnInit(): void {
  }



}
