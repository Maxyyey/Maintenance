import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';

import Swal from 'sweetalert2';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.scss'
})
export class AddDepartmentComponent {

  formDetails: FormGroup = this.fb.group({
    department_short: [null, [Validators.required, Validators.maxLength(10)]],
    department_full: [null, [Validators.required, Validators.maxLength(128)]],
    programs: this.fb.array([])
  })

  constructor(
    private ref: MatDialogRef<AddDepartmentComponent>, 
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.addPrograms()
  }

  get programs() {
    return this.formDetails.controls["programs"] as FormArray;
  }

  getFormGroup(control: AbstractControl) { 
    return control as FormGroup; 
  }
 

  addPrograms() {
    const programForm: FormGroup = this.fb.group({
      program_short: [null, [Validators.required, Validators.maxLength(10)]],
      category: [null, [Validators.required, Validators.maxLength(32)]],
      program_full: [null, [Validators.required, Validators.maxLength(128)]],
    })

    this.programs.push(programForm)
  }

  deleteProgram(Index: number) {
    this.programs.removeAt(Index);
  }

  addDepartment() {
    console.log(this.formDetails.value)
    this.dataService.post('/add-department', '', this.formDetails.value).subscribe(
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
      confirmButtonColor: '#4f6f52',
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

}
