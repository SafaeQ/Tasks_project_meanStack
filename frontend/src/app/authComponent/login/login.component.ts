import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email = ''
  public password = ''

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  setEmail(event: any){
    this.email = event.target.value
  }
  // setPassword

}
