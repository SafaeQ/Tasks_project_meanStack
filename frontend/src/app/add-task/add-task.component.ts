import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import { TasksService } from '../services/tasks.service';

export interface Task {
  id: number;
  label: string;
  discription: string;
  type: string;
  dueDate: Date;
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

  constructor( private router:Router, public taskService: TasksService) {
  }

  tasks: Task[] = []

  // submit data of tasks
  submitData() {
    const data = {
      label : this.body.label,
      discription : this.body.discription,
      dueDate : this.body.dueDate,
      type : this.body.type,
    }
    this.taskService.createTask(data)
    .subscribe(task => {
      console.log(task)
      this.tasks = [task, ...this.tasks]
      this.router.navigateByUrl('/tasks')
    })
  }

  backtoTasks(): void {
    this.router.navigateByUrl('/tasks');
  }

  ngOnInit(): void {
  }

}
