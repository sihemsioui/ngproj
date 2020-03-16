import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{User} from '../User'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }


  submitted = false;
  user: User = new User();
  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.user);
    this.authService.register(this.user);  
  
  }

}
