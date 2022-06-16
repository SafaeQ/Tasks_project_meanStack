import { TasksService } from './../services/tasks.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTaskComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public taskService: TasksService) { }

  activeTask:any;
  myGroup: FormGroup;

  ngOnInit(): void {
    this.activeTask = this.data;
    this.myGroup = new FormGroup({
      label: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', Validators.required),
      discription: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }


  editTask(){
    this.taskService.updateTask(this.activeTask._id, this.myGroup.value).subscribe((res) => {
      this.dialogRef.close()
    })
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
