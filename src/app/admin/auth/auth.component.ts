import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if(form.valid) {
      if(this.username ==='admin' && this.password ==='12345') {
        this.router.navigateByUrl('/admin/main');
      } else {  
        this.errorMessage = 'Wrong username or password!';
      }
   } else {
    this.errorMessage = 'Enter a valid username and correct password!'; 
   }



}}
