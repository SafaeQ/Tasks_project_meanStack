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

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  openAddBtn(){
    this.dialogRef.open(AddTaskComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }
  openEditBtn(){
    this.dialogRef.open(EditTaskComponent, {
      data: {
        name: 'safa'
      }
    })
  }
  onLougout(){
    localStorage.removeItem('token')
  }
}
