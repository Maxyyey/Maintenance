import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';
import { LockerService } from '@app/services/locker.service';
interface MyOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class UserComponent {
  numberOfLockers: number = 0;
  startingLockerNumber: number = 0; //just a placeholder
  status: string = 'Available'   //just a placeholder
  date: string = new Date().toISOString().slice(0, 10);

  constructor(
    private ref: MatDialogRef<UserComponent>,
    private lockersService: LockerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }

  addLocker() {
    const form = {
      numberOfLockers: this.numberOfLockers
    }
    this.lockersService.addLocker(form).subscribe(
      result => {
        if(result.success){
          this.showSuccessAlert()
          this.ref.close(result)
        }
      },
      error => {
        if(error.status == 400) {
          this.showErrorAlert()
        }
        console.error(error)
      }
    )
  }

  ngOnInit() {
    this.getLatestLockerNumber()
  }

  getLatestLockerNumber() {
    this.startingLockerNumber = this.data
  }

  addBox() {
    Swal.fire({
      title: "Add New Locker",
      text: "Are you sure you want to add a new locker?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#4f6f52",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.addLocker()
      }
    });
  }

  showSuccessAlert() {
        Swal.fire({
          title: "Success!",
          text: "Locker has been successfully added.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
    });
  }

  showErrorAlert() {
    Swal.fire({
      title: "Error!",
      text: "Failed to add locker.",
      icon: "error",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
    });
  }

  cancelBox(){
    Swal.fire({
      title: "Cancel?",
      text: "Are you sure you want to cancel adding lockers?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
          this.ref.close(null);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "error",
            title: "Adding lockers has been cancelled."
          });
      }
    });
  }
}