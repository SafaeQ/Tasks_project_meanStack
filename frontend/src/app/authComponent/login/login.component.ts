import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String = ""
  password:String = ""

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  setEmail(event: any){
    this.email = event.target.value
  }
  setPassword(event: any){
    this.password = event.target.value
  }

  loginUser(event: any){
    event.preventDefault();
    this.auth.login(this.email, this.password).subscribe( (res: any, err: any)=> {
      this.auth.storeUserToken(res.token);
      this.auth.navigateToTasks();
    })
  }

}
