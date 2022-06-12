import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public fullName = ""
  public email = ''
  public password= ''

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  setFullName (event: any){
    this.fullName = event.target.fullName
  }
  setEmail (event: any){
    this.email = event.target.email
  }
  setPassword (event: any){
    this.password = event.target.password
  }

  signup(event: any){
    event.preventDefault();
    this.auth.register(this.fullName, this.email, this.password).subscribe( (res: any, err: any) => {
      this.auth.storeUserToken(res.token)
      this.auth.navigateToTasks()
    })
  }

}
