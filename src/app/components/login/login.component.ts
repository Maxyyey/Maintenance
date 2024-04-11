import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void { }
  
  onAddNewBtnClick() {
    this.router.navigate(['/main']);
  }
   
   
  }
