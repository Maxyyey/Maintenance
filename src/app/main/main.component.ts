import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  showPopup: boolean = false;
  dropdownOpen: boolean | undefined;
  projectDropdownOpen: boolean | undefined;

  constructor(
    private router: Router, 
    private authService: AuthService,
  ) {

  }

  isDashboardActive(): boolean {
    const activeRoutes = ['circulation1', 'cataloging1', 'locker1', 'opac1'];
    return !this.dropdownOpen && activeRoutes.some(route => this.router.url.includes(route));
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = this.showPopup;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.projectDropdownOpen = false
  }

  toggleUserDropdown() {
    this.projectDropdownOpen = !this.projectDropdownOpen;
    this.dropdownOpen = false
  }

  redirectToLoginPage() {
    console.log(sessionStorage.getItem ("token"))
    this.authService.logout().subscribe(
      response => {
        Swal.fire({
          title: 'Logged Out',
          text: 'You have been logged out.',
          icon: 'success',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000, // Display the toast for 3 seconds
          timerProgressBar: true, // Show a progress bar indicating the remaining time
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
          },
          background: '#ffffff', // Custom background color for success (white)
        });
      },
      error => {
        console.log(error)
        sessionStorage.clear()
        this.router.navigate(['/login'])
      }
    )
  }
}
