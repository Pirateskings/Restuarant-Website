import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']  
})
export class PagesComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {} 

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.routerState.snapshot.root.fragment;
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
  }

  page = {
    name: "",
    email: "",
    num: "",
    event: "",
    date: "",
    address: ""
  };

  test = {
    name: "",
    email: "",
    review: "",
    rating: ""
  };

  onSubmit() {
    if (!this.page.name || !this.page.email || !this.page.num) {
      alert("Please, fill out all required fields.");
      return;
    }
    this.http.post("http://localhost:8080/api/book", this.page).subscribe({
      next: (response: any) => {
        console.log("Booking Success:", response);
        alert("Successfully Booked");
              },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        alert("Unexpected Error Occurred");
      }
    });
  }

  onTestimonials() {
    if (!this.test.name || !this.test.email || !this.test.review) {
      alert("Please, fill out all required fields.");
      return;
    }
    this.http.post("http://localhost:8080/api/testimonials", this.test).subscribe({
      next: (response: any) => {
        console.log("Testimonial Success:", response);
        alert("Thank You for Feedback");
        
      },
      error: (error: HttpErrorResponse) => {
        console.error(error);
        alert("Unexpected Error Occurred");
      }
    });
  }
}
