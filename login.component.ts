import { CommonModule, NgClass, NgIf } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass, CommonModule, FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  title = "Login";
  todaydate: Date;

  constructor() {
    this.todaydate = new Date();
  }

  logindata = {
    username: '',
    password: '',
  };

  private http= inject(HttpClient);
  private  route= inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('Route params:', params);
    });
  }

  onLogin() {
    if (!this.logindata.username || !this.logindata.password) {
      alert("Username or Password is missing");
      return;
    } 
    console.log("logindata",this.logindata);
    this.http.post('http://localhost:8080/api/login', this.logindata,{
      responseType:'text'
    }).subscribe({
      next: (response: string) => {
        console.log("Server Response",response);
        if (response === "login Successful") {
          alert("Login Successful");
          
        }
        this.router.navigateByUrl("/home");
         },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          alert("Invalid credentials");
        } else if (error.status === 404) {
          alert("User not found");
        } else if (error.status === 500) {
          alert("Server error occurred");
        } else {
          alert("An unexpected error occurred");
        }
      }
    });
  } 
}
