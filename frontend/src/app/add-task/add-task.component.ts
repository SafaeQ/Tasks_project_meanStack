import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  label:string = "";
  date:Date = new Date();
  description:string = "";
  type:string = "";
  // completed: Boolean = "";

  constructor() { }

  ngOnInit(): void {
  }

}
