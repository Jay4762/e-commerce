import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    // Check if the username and password are valid
    if (this.authService.login(this.username, this.password)) {
      console.log('Logged in successfully');
      this.router.navigate(['/products']);
    } else {
      alert('Invalid username or password');
    }
  }
}
