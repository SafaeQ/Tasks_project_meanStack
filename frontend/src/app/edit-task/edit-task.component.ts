import { Router } from '@angular/router';
import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private router: Router, public taskService: TasksService) { }

  ngOnInit(): void {
  }


  editTask(){
    // this.taskService.updateTask().subscribe(task => {

    // })

  }

  backToTasks(): void {
    this.router.navigateByUrl('/tasks');
  }

}
