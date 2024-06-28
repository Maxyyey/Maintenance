import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';
import { CatalogingService } from '@app/services/cataloging.service';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-addicon',
  templateUrl: './addicon.component.html',
  styleUrl: './addicon.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class AddiconComponent {
  currentDate: string;
  form: {
    location_short: string,
    location_full: string
  }
  
  constructor(
    private ref: MatDialogRef<AddiconComponent>, 
    private catalogingService: CatalogingService) {
      const today = new Date();
      this.currentDate = today.toISOString().split('T')[0];

      this.form = {
        location_short: '',
        location_full: '',
      }
  }

  createLocation() {
    this.catalogingService.createLocations(this.form).subscribe(
      response => {
        console.log(response)
        this.ref.close(response);
        Swal.fire({
          title: "Success!",
          text: "Location has been added.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      },
      error => {
        console.error(error)
        if(error.status === 422) {
          Swal.fire({
            title: "Error!",
            text: "Invalid input!",
            icon: "error",
          });
        }
        else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later!",
            icon: "error",
          });
        }
      }
    )
  }

  closepopup() {
    this.ref.close();
  }

  // SWEETALERT UPDATE POPUP
  createBox(){
    Swal.fire({
      title: "Add Location",
      text: "Are you sure you want to add this location?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#4f6f52",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.createLocation()
      }
    });
  }

  // CANCEL EDITING POPUP
  cancelBox(){
    Swal.fire({
      title: "Are you sure you want to cancel adding location?",
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


