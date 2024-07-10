import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CatalogingService } from '@app/services/cataloging.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrl: './add-program.component.scss'
})
export class AddProgramComponent {
  program_short: string = ''
  formDetails: FormGroup = this.fb.group({
    department_short: [null, [Validators.required, Validators.maxLength(32)]],
    department_full: [null, [Validators.required, Validators.maxLength(64)]],
    program_short: [null, [Validators.required, Validators.maxLength(10)]],
    category: [null, [Validators.required, Validators.maxLength(32)]],
    program_full: [null, [Validators.required, Validators.maxLength(100)]],
  })

  constructor(
    private ref: MatDialogRef<AddProgramComponent>,
    private catalogingService: CatalogingService, 
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    
  }

  ngOnInit() {
    this.formDetails.patchValue({
      department_short: this.data.department_short,
      department_full: this.data.department_full
    })
  }


  closepopup() {
    this.ref.close("close");
  }

  addProgram() {
    this.catalogingService.addPrograms(this.formDetails.value).subscribe(
      (response: any) => {
        this.ref.close({data: this.formDetails.value});
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
