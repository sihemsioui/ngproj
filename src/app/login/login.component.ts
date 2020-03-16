import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{User} from '../User'
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  submitted = false;
  user: User = new User();


  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.user);
    this.authService.login(this.user);  
  
  }
  
  

}
