import { Router } from '@angular/router';
import { Component, OnInit, NgModule } from '@angular/core';
import { TasksService } from '../services/tasks.service';

export interface Task {
  id: number;
  label: string;
  discription: string;
  type: string;
  dueDate: Date;
  selectedType: string;
  }
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

  constructor( private router:Router, public taskService: TasksService) {
  }

  tasks: Task[] = []

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
