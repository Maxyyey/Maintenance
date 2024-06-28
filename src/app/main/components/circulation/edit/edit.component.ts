import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';
import { PatronService } from '@app/services/patron.service';
import { response } from 'express';
import { error } from 'console';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class EditComponent {
  patron: string = ''
  fine: number = 0 
  days_allowed: number = 0
  hours_allowed: number = 0
  materials_allowed: number = 0

  constructor(
    private ref: MatDialogRef<EditComponent>,
    private patronService: PatronService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  ngOnInit() {
    this.getOldValue();
  }

  getOldValue() {
    this.patron = this.data.patron
    this.fine = this.data.fine
    this.days_allowed = Math.floor(this.data.hours_allowed / 24)
    this.hours_allowed =this.data.hours_allowed % 24
    this.materials_allowed = this.data.materials_allowed
    console.log(this.data.patron)
  }

  closepopup() {
    this.ref.close(null);
  }

  updatePatrons(id:number) {
    const data = {
      fine: this.fine,
      days_allowed: this.days_allowed,
      hours_allowed: this.hours_allowed
    } 
    console.log(data)

    this.patronService.updatePatron(id, data).subscribe(
      response => {
        this.ref.close(response);
        Swal.fire({
          title: "Update successful!",
          text: "The changes have been saved.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      },
      error => {
        console.error(error)
        if(error.status === 422 || error.status === 400) {
          Swal.fire({
            title: "Error!",
            text: "Invalid input!",
            icon: "error",
          });
        }
        else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
          });
        }
      }
    )
  }

  // SWEETALERT UPDATE POPUP
  updateBox(){
    Swal.fire({
      title: "Update Patron",
      text: "Are you sure you want to update this patron?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#4f6f52",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.updatePatrons(this.data.id)
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


