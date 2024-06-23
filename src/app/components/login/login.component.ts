import { Component } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = ''; 
  password: string = '';
  isLoggingin: boolean = false

  backgroundImageUrl = 'path/to/image.jpg'; // Add the background image URL here

  showpassword = false;

  constructor(
    private authService: AuthService, 
    private router: Router) {

  }

  login() {
    const credential = { "username" : this.email, "password": this.password}
    
    this.authService.login(credential).subscribe(
      response => {
        this.router.navigate(['/main'])

        Swal.fire({
          title: 'Login Successful',
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
            icon: 'sweetalert-custom-icon-success'
          },
          background: '#ffffff',
        });
      },
      error => {
        console.error(error)
        Swal.fire({
          icon: "error",
          title: "Unauthorized User",
          text: error.error.message,
        })
        this.isLoggingin = false
      },
      () => {
        this.isLoggingin = false
      }
    )
  }


  toggleShow() {
    this.showpassword = !this.showpassword
  }
}
