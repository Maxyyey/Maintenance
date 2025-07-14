import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

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
    private dialog: MatDialog
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
  isSidebarCollapsed = false;
  isSidebarOverlay = false;

  toggleSidebar() {
    if (window.innerWidth <= 768) {
      if (this.isSidebarOverlay) {
        this.isSidebarOverlay = false;
        this.isSidebarCollapsed = true;
      } else {
        this.isSidebarOverlay = true;
        this.isSidebarCollapsed = false;
      }
    } else {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      this.isSidebarOverlay = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      this.isSidebarCollapsed = true;
      this.isSidebarOverlay = false;
    } else {
      this.isSidebarCollapsed = screenWidth <= 1320;
      this.isSidebarOverlay = false;
    }
  }

  openChangePassword() {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '700px',
      disableClose: true,
    });

    dialogRef.componentInstance.closed.subscribe(() => {
      dialogRef.close();
    });
  }
}

