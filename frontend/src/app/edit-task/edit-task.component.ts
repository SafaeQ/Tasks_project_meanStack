import { Task } from './../add-task/add-task.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, public taskService: TasksService) { }

  _id: string;
  task: Task;
  myGroup: FormGroup;

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];
    this.taskService.find(this._id).subscribe((data: Task) =>{
      this.task = data
    })

    this.myGroup = new FormGroup({
      // id: new FormControl('', [Validators.required]),
      label: new FormControl('', [Validators.required]),
      dueDate: new FormControl('', Validators.required),
      discription: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    });
  }

  editTask(){
    this.taskService.updateTask(this._id, this.myGroup.value).subscribe((res)=> {
      console.log(res);
    })
  }

  backToTasks(): void {
    this.router.navigateByUrl('/tasks');
  }

}
