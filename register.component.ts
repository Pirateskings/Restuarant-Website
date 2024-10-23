import { CommonModule, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule,ActivatedRoute, Router } from '@angular/router'; 
import { HttpErrorResponse} from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgStyle, RouterLink, RouterLinkActive, CommonModule, FormsModule,RouterModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
}) 
export class RegisterComponent {
  title = "Registration";
  todaydate: Date;

    formdata = {
      name: '',
      email: '',
      mobile: '',
      date: '',
      address: '',
      foodtype: '',
      cushionstyle: '',
      fav: '',
      username: '',
      password: '',
      conform: ''
    };
    private http = inject(HttpClient);
    private route = inject(ActivatedRoute);
    private router= inject(Router);

    constructor() {
      this.todaydate = new Date();
    }
    ngOnInit(): void {
      
      this.route.params.subscribe(params => {
        console.log('Route params:', params);
      });
    }
    onSubmit() {
      if (this.formdata.password !== this.formdata.conform) {
        alert("Passwords do not match!");
        return;
      }
      if(!this.formdata.username)
      {
        alert("Please Enter the username👇👇");
      }
      if(!this.formdata){
        alert("Fill the form")
      } else{
      this.http.post('http://localhost:8080/api/register', this.formdata).subscribe({
        next: (response: any) => {
          console.log('Registration successful!', response);
          alert('Registration successful!');
          this.router.navigate(['/login']);
          return;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Registration failed', error);
        },
        complete: () => {
          console.log('Registration process complete.');
        }
      });
    }
    }
  }
