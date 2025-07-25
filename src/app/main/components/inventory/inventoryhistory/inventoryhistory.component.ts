import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';
interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-inventoryhistory',
  templateUrl: './inventoryhistory.component.html',
  styleUrl: './inventoryhistory.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],

})
export class InventoryHistoryComponent {

  form: {
    first_name: string,
    middle_name: string,
    last_name: string,
    ext_name: string,
    username: string,  //this is email
    password: string,
    role: string
  }
  constructor(
    private ref: MatDialogRef<InventoryHistoryComponent>) {
    this.form = {
      first_name: '',
      middle_name: '',
      last_name: '',
      ext_name: '',
      username: '',  //this is email
      password: '',
      role: ''
    }
  }

  closepopup() {
    this.ref.close();
  }

  // addUser() {
  //   const form = {
  //     first_name: this.form.first_name,
  //     middle_name: this.form.middle_name,
  //     last_name: this.form.last_name,
  //     ext_name: this.form.ext_name,
  //     username: this.form.username,
  //     password: this.form.password,
  //     role: JSON.stringify([this.form.role])
  //   }

  //   console.log(this.form)
  //   if (this.form.username.includes('@')) {
  //     this.personnelService.createPersonnel(form).subscribe(
  //       response => {
  //         this.ref.close(response);
  //         Swal.fire({
  //           title: "Add successful!",
  //           text: "The changes have been saved.",
  //           icon: "success",
  //           confirmButtonText: 'Close',
  //           confirmButtonColor: "#777777",
  //         });
  //       },
  //       error => {
  //         console.error(error)
  //         if (error.status === 422) {
  //           Swal.fire({
  //             title: "error!",
  //             text: "Invalid input.",
  //             icon: "error",
  //           });
  //         }
  //         else {
  //           Swal.fire({
  //             title: "error!",
  //             text: "Something went wrong, please try again later.",
  //             icon: "error",
  //           });
  //         }
  //       }
  //     )
  //   } else {
  //     Swal.fire({
  //       title: "Invalid Email Address!",
  //       text: "Personnel not saved.",
  //       icon: "error",
  //       confirmButtonText: 'Close',
  //       confirmButtonColor: "#777777",
  //     });
  //   }

  // }

  // SWEETALERT UPDATE POPUP
  addBox() {
    Swal.fire({
      title: "Add User",
      text: "Are you sure you want to add this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#4f6f52",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        // this.addUser()
      }
    });
  }

  cancelBox() {
    Swal.fire({
      title: "Are you sure you want to cancel adding personnel?",
      text: "Your changes will not be saved.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.closepopup()
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
          title: "Changes not saved."
        });
      }
    });
  }
}


