import { NgStyle } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgStyle,FormsModule,RouterLink,RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title="Conducts";

  constructor(private http:HttpClient ){}

  contact={
    name:"",
    email:"",
    phone:"",
    subject:"",
    date:"",
    suggestion:"",
  };
  Oncontact(){
     if(!this.contact.name || !this.contact.email || !this.contact.phone || !this.contact.date || !this.contact.subject ||!this.contact.suggestion){
      alert("Please,Fill the Missing Field");
      return;
     }  
     this.http.post("http://localhost:8080/api/complain", this.contact).subscribe({
      next:(response:any)=>{
        console.log("Response",response);
        alert("Thankyou for Submit");
        return;
      },
       error:(error:HttpErrorResponse)=>{
        console.error("error",error);
        alert("Unexceptrd error occurs");
      }
    });
  }
}

