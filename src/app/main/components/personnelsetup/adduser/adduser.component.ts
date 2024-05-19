import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';
import { Settings } from 'node:http2';
import { PersonnelService } from '@app/services/personnel.service';
import { response } from 'express';
import { error } from 'node:console';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class AddUserComponent {

  form: {
    first_name: string,
    middle_name: string,
    last_name: string,
    ext_name: string,
    username: string,  //this is email
    password: string,
    access: string
  }
  constructor(
    private ref: MatDialogRef<AddUserComponent>,
    private personnelService: PersonnelService) {
      this.form = {
        first_name: '',
        middle_name: '',
        last_name: '',
        ext_name: '',
        username: '',  //this is email
        password: '',
        access: ''
      }
  }

  ngOnInit(): void {
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  addUser() {
    console.log(this.form)
    this.personnelService.createPersonnel(this.form).subscribe(
      response => {
        console.log(response)
        if(response.message) {
          this.ref.close('Closed using function');
          Swal.fire({
            title: "Add successful!",
            text: "The changes have been saved.",
            icon: "success",
            confirmButtonText: 'Close',
            confirmButtonColor: "#777777",
          });
          return
        }
        else {
          Swal.fire({
            title: "error!",
            text: "Invalid input.",
            icon: "error",
          });
        }
      },
      error => {
        console.error(error)
      }
    )
  }

  // SWEETALERT UPDATE POPUP
  addBox(){
    Swal.fire({
      title: "Add User",
      text: "Are you sure you want to add this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#31A463",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.addUser()
      }
    });
  }

  // SWEETALERT ARCHIVE POPUP
  archiveBox(){
    Swal.fire({
      title: "Archive Project",
      text: "Are you sure want to archive this project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.ref.close('Closed using function');
        Swal.fire({
          title: "Archiving complete!",
          text: "Project has been safely archived.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    });
  }

  // CANCEL EDITING POPUP
  cancelBox(){
    Swal.fire({
      title: "Are you sure you want to cancel editing details?",
      text: "Your changes will not be saved.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
          this.ref.close('Closed using function');
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


