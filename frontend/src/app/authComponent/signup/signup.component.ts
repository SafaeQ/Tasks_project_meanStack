import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fullName:String = ""
  email:String = ""
  password:String= ""

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  setFullName (event: any){
    this.fullName = event.target.value as String
  }
  setEmail (event: any){
    this.email = event.target.value as String
  }
  setPassword (event: any){
    this.password = event.target.value as String
  }

  signup(event: any){
    event.preventDefault();
    console.log("Register: ",this.fullName, this.email, this.password);

    this.auth.register(this.fullName, this.email, this.password).subscribe( (res: any, err: any) => {
      this.auth.navigateToLogin()
    })
  }

}
