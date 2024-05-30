import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CatalogingService } from '@app/services/cataloging.service';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-addpopup',
  templateUrl: './addpopup.component.html',
  styleUrl: './addpopup.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  
})
export class AddPopupComponent {

  department: string;
  full_department: string;
  form: any 

  constructor(
    private ref: MatDialogRef<AddPopupComponent>, 
    private catalogingService: CatalogingService
  ) 
  {
    this.department = '';
    this.full_department = '';
  }

  addDepartment() {
    const payload = {
      department: this.department,
      full_department: this.full_department
    };
    console.log('Form data:', payload);
    
    this.catalogingService.addDepartments(payload).subscribe(
      response => {
        Swal.fire({
          title: 'Success!',
          text: 'College has been added.',
          icon: 'success',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        }).then(() => {
          this.ref.close(response);
        });
    }, error => {
      console.error('Error adding college:', error);
      if(error.status === 422) {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid input.',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
      }
      else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: '#777777',
        });
      }
    });

  }

  updateBox() {
    Swal.fire({
      title: 'Add College?',
      text: 'Are you sure you want to add this College?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#31A463',
      cancelButtonColor: '#777777',
    }).then((result) => {
      if (result.isConfirmed) {
        this.addDepartment()
      }
    });
  }

  closepopup() {
    this.ref.close(null);
  }

  // CANCEL EDITING POPUP
  cancelBox(){
    Swal.fire({
      title: "Are you sure you want to cancel adding college?",
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
            title: "Adding cancelled."
          });
      }
    });
  }
  uploadFile(event: any){
    this.form.file = event.target.files[0];
    console.table(this.form.file)
   }
}


