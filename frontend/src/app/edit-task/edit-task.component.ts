import { TasksService } from './../services/tasks.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface TypeTask {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  types_: TypeTask[] = [
    {value: 'work-0', viewValue: 'Work'},
    {value: 'personnel-1', viewValue: 'Personnel'},
    {value: 'growth-2', viewValue: 'Growth'},
  ];

  constructor(public dialogRef: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) public data:any,public taskService: TasksService) { }

  ngOnInit(): void {
  }


  editTask(){
    // this.taskService.updateTask().subscribe(task => {

    // })

  }
// for close btn
  onClose(): void {
    this.dialogRef.close();
  }

}
