import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

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
    private http: HttpClient,
  ) 
  {
    this.department = '';
    this.full_department = '';
  }

  updateBox() {
    const payload = {
      department: this.department,
      full_department: this.full_department
    };

    console.log('Form data:', payload);

    Swal.fire({
      title: 'Add College',
      text: 'Are you sure you want to add this College?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#31A463',
      cancelButtonColor: '#777777',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.post('http://localhost:8000/api/add-department', payload).subscribe(response => {
          Swal.fire({
            title: 'College Added!',
            text: 'The changes have been saved.',
            icon: 'success',
            confirmButtonText: 'Close',
            confirmButtonColor: '#777777',
          }).then(() => {
            // Assuming you have some method to close the popup
            this.closepopup();
          });
        }, error => {
          // Handle error here
          console.error('Error adding college:', error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error adding the college.',
            icon: 'error',
            confirmButtonText: 'Close',
            confirmButtonColor: '#777777',
          });
        });
      }
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
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
  uploadFile(event: any){
    this.form.file = event.target.files[0];
    console.table(this.form.file)
   }
}


