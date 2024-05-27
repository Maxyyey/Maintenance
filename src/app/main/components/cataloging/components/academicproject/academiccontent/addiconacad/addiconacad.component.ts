import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPopupComponent } from '../addpopup/addpopup.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



import Swal from 'sweetalert2';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-addiconacad',
  templateUrl: './addiconacad.component.html',
  styleUrl: './addiconacad.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  
})
export class AddiconacadComponent implements OnInit{
  selectedDepartment: string;
  programAbbreviation: string;
  projectCategory: string;
  programName: string;

  constructor(private router: Router, private ref: MatDialogRef<AddiconacadComponent>, private buildr: FormBuilder, private dialogRef: MatDialog,
    private http: HttpClient) {
    this.selectedDepartment = '';
    this.programAbbreviation= '';
    this.projectCategory= '';
    this.programName= '';
    
  }

  ngOnInit() {
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  addProgram() {
    const payload = {
      department: this.selectedDepartment,
      program: this.programAbbreviation,
      category: this.projectCategory,
      full_program: this.programName
    };

    console.log('Form data:', payload);

    // Display confirmation dialog
    Swal.fire({
      title: "Add Program",
      text: "Are you sure you want to add this program?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#31A463",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send data to backend
        this['http'].post('http://localhost:8000/api/add-program', { payload })
          .subscribe(
            (response: any) => {
              this.closepopup()
              console.log('Program added successfully', response);
              // Show success message to the user
              Swal.fire({
                title: "Add successful!",
                text: "The changes have been saved.",
                icon: "success",
                confirmButtonText: 'Close',
                confirmButtonColor: "#777777",
              });
            },
            (error: any) => {
              console.error('Error adding program', error);
              // Show error message to the user
              Swal.fire({
                title: "Error",
                text: "Failed to add program. Please try again later.",
                icon: "error",
                confirmButtonText: 'Close',
                confirmButtonColor: "#777777",
              });
            }
          );
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


