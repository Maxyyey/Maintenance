import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CatalogingService } from '@app/services/cataloging.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addiconacad',
  templateUrl: './addiconacad.component.html',
  styleUrl: './addiconacad.component.scss',
})

export class AddiconacadComponent implements OnInit{
  form: {
    programAbbreviation: string;
    projectCategory: string;
    programName: string;
  }

  constructor(
    private ref: MatDialogRef<AddiconacadComponent>,
    private catalogingService: CatalogingService, 
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.form =  {
      programAbbreviation: '',
      projectCategory: '',
      programName: ''
    }
    
    
  }

  ngOnInit() {
    console.log(this.data)
  }


  closepopup() {
    this.ref.close('Closed using function');
  }

  addProgram() {
    const form = {
      program: this.programAbbreviation,
      category: this.projectCategory,
      full_program: this.programName
    };

    console.log('Form data:', form);
    
    this.catalogingService.addPrograms(form).subscribe(
      (response: any) => {
        this.closepopup()
        Swal.fire({
          title: "Success!",
          text: "Program has been added.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      },
      (error: any) => {
        console.error(error);
        if(error.status === 422) {
          Swal.fire({
            title: "Error!",
            text: "Invalid input.",
            icon: "error",
            confirmButtonText: 'Close',
            confirmButtonColor: "#777777",
          });
        }
        else {
          Swal.fire({
            title: "Error!",
            text: "Failed to add program. Please try again later.",
            icon: "error",
            confirmButtonText: 'Close',
            confirmButtonColor: "#777777",
          });
        }
      }
    );

  }
  addBox() {
    Swal.fire({
      title: "Add program?",
      text: "Are you sure you want to add this program?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#4f6f52",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.addProgram()
      }
    });

}


  // CANCEL EDITING POPUP
  cancelBox(){
    Swal.fire({
      title: "Are you sure you want to cancel adding program?",
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
}


