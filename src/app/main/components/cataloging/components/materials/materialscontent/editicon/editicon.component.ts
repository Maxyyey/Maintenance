import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { DataService } from '@app/services/data.service';


@Component({
  selector: 'app-editicon',
  templateUrl: './editicon.component.html',
  styleUrl: './editicon.component.scss'
})
export class EditiconComponent {
  currentDate: string;
  formDetails: FormGroup = this.fb.group({
    location_short: [null, [Validators.required, Validators.maxLength(10)]],
    location_full: [null, [Validators.required, Validators.maxLength(32)]],
  })

  
  constructor(
    private ref: MatDialogRef<EditiconComponent>,
    private dataService: DataService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];

    this.formDetails.patchValue({
      ...this.data.location
    })
  }

   // SWEETALERT UPDATE POPUP
   createBox() {
    Swal.fire({
      title: "Update Location",
      text: "Are you sure you want to update this location?",
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

  createLocation() {
    this.dataService.post('/locations/', this.data.location.location_short, this.formDetails.value).subscribe(
      response => {
        console.log(response)
        this.ref.close(response);
        Swal.fire({
          title: "Success!",
          text: "Location has been updated.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      },
      error => {
        console.error(error)
        if (error.status === 422) {
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

  // CANCEL EDITING POPUP
  cancelBox() {
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




