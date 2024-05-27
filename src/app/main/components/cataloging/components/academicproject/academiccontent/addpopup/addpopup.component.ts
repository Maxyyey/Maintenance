import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


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

  options1 = [
    { value: 'Admin/Staff', label: 'Admin/Staff' },
    { value: 'Faculty', label: 'Faculty' },
    { value: 'Student (Online)', label: 'Student (Online)' },
    { value: 'Student (FaceToFace)', label: 'Student (FaceToFace)' },
    
  ];
  options2: MyOption[] = [];
  options3: MyOption[] = [];

  selectedOption1: string;
  selectedOption2: string;
  selectedOption3: string;
  form: any;

  department: string;
  full_department: string;

  constructor(private router: Router, 
    private ref: MatDialogRef<AddPopupComponent>, 
    private builder: FormBuilder,
    private fb: FormBuilder,
    private http: HttpClient,
  ) 
  {
    this.selectedOption1 = ''; // Initialize selectedOption1 in the constructor
    this.selectedOption2 = '';
    this.selectedOption3 = '';
    this.department = '';
    this.full_department = '';

    // Initialize collegeForm in the constructor
    this.collegeForm = this.fb.group({
      department: ['', [Validators.required, Validators.maxLength(10)]],
      full_department: ['', [Validators.required, Validators.maxLength(255)]]
    });

    
  }

  
  // onOption1Change() {
  //   // Logic for populating PROGRAM based on COLLEGE DEPARTMENT

  //   // CCS -------------------------------------------------
  //   if (this.selectedOption1 === 'CCS') {
  //     this.options2 = [
  //       { value: 'BSCS', label: 'BSCS' },
  //       { value: 'BSIT', label: 'BSIT' },
  //       { value: 'BSEMC', label: 'BSEMC' },
  //       { value: 'ACT', label: 'ACT' },
  //     ];
  //   }
  //   // CBA -------------------------------------------------
  //   else if (this.selectedOption1 === 'CBA') {
  //     this.options2 = [
  //       { value: 'BSA', label: 'BSA' },
  //       { value: 'BSCA', label: 'BSCA' },
  //       { value: 'BSBA-FM', label: 'BSBA-FM' },
  //       { value: 'BSBA-MKT', label: 'BSBA-MKT' },
  //       { value: 'BSBA-HRM', label: 'BSBA-HRM' },
  //     ];
  //   }
  //   // CEAS -------------------------------------------------
  //   else if (this.selectedOption1 === 'CEAS') {
  //     this.options2 = [
  //       { value: 'BACOMM', label: 'BACOMM' },
  //       { value: 'BEED', label: 'BEED' },
  //       { value: 'BPED', label: 'BPED' },
  //       { value: 'BCAED', label: 'BCAED' },
  //       { value: 'BECED', label: 'BECED' },
  //       { value: 'BSED-ENG', label: 'BSED-ENG' },
  //       { value: 'BSED-FIL', label: 'BSED-FIL' },
  //       { value: 'BSED-MATH', label: 'BSED-MATH' },
  //       { value: 'BSED-SCI', label: 'BSED-SCI' },
  //       { value: 'BSED-SOC', label: 'BSED-SOC' }
  //     ];
  //   }
  //   // CAHS -------------------------------------------------
  //   else if (this.selectedOption1 === 'CAHS') {
  //     this.options2 = [
  //       { value: 'BSM', label: 'BSM' },
  //       { value: 'BSN', label: 'BSN' }
  //     ];
  //   }
  //   // CHTM -------------------------------------------------
  //   else if (this.selectedOption1 === 'CHTM') {
  //     this.options2 = [
  //       { value: 'BSHM', label: 'BSHM' },
  //       { value: 'BSTM', label: 'BSTM' }
  //     ];
  //   } 
    
  //   else {
  //     this.options2 = [];
  //   }

  //   this.selectedOption2 = '';
  //   this.options3 = []; // Reset options3 when the first select menu changes
  //   this.selectedOption3 = ''; // Reset selectedOption3 when the first select menu changes
  // }


  // onOption2Change() {
  //   // Logic for populating PROJECT TYPE based on COLLEGE PROGRAM

  //   // CCS PROGRAMS -------------------------------------------------
  //   if (this.selectedOption2 === 'BSCS') {
  //     this.options3 = [
  //       { value: 'Thesis', label: 'Thesis' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSIT') {
  //     this.options3 = [
  //       { value: 'Capstone', label: 'Capstone' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSEMC') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'ACT') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   // CBA PROGRAMS -------------------------------------------------
  //   else if (this.selectedOption2 === 'BSA') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSCA') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSBA-FM') {
  //     this.options3 = [
  //       { value: 'Feasibility', label: 'Feasibility' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSBA-MKT') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSBA-HRM') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }

  //   // CEAS PROGRAMS -------------------------------------------------
  //   else if (this.selectedOption2 === 'BACOMM') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BEED') {
  //     this.options3 = [
  //       { value: 'Classroom Based Action Research', label: 'Classroom Based Action Research' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BPED') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BCAED') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BECED') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BSED-ENG') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BSED-FIL') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BSED-MATH') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BSED-SCI') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }
  //   else if (this.selectedOption2 === 'BSED-SOC') {
  //     this.options3 = [
  //       { value: '', label: '' }
  //     ];
  //   }

  //   // CAHS PROGRAMS -------------------------------------------------
  //   else if (this.selectedOption2 === 'BSN') {
  //     this.options3 = [
  //       { value: 'Case Presentation', label: 'Case Presentation' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSM') {
  //     this.options3 = [
  //       { value: 'Case Presentation', label: 'Case Presentation' }
  //     ];
  //   }
  //   // CHTM PROGRAMS -------------------------------------------------
  //   else if (this.selectedOption2 === 'BSTM') {
  //     this.options3 = [
  //       { value: 'Thesis', label: 'Thesis' }
  //     ];
  //   } 
  //   else if (this.selectedOption2 === 'BSHM') {
  //     this.options3 = [
  //       { value: 'Thesis', label: 'Thesis' }
  //     ];
  //   } 

  //   else {
  //     this.options3 = [];
  //   }

  //   this.selectedOption3 = '';
  // }


  // DYNAMIC ADD MULTIPLE AUTHOR
  ngOnInit(): void {
    this.addvalue();
  }

  values: { value: string }[] = [];

  removevalue(i: any){
    this.values.splice(i, 1);
  }

  addvalue(){
    this.values.push({value: "'di ko alam paano, comma na ba kapag marami tas pwede pa rin mag add?"});
  }

 

  // // SWEETALERT UPDATE POPUP
  // updateBox(){
  //   const payload = {
  //     department: this.collegeForm.get('department')?.value,
  //     full_department: this.collegeForm.get('full_department')?.value
  //   };

  //   console.log('Form data:', payload);

  //   Swal.fire({
  //     title: 'Add College',
  //     text: 'Are you sure you want to add this College?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes',
  //     cancelButtonText: 'Cancel',
  //     confirmButtonColor: '#31A463',
  //     cancelButtonColor: '#777777',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this['http'].post('http://localhost:8000/api/add-program', { payload }).subscribe(response => {
  //         Swal.fire({
  //           title: 'College Added!',
  //           text: 'The changes have been saved.',
  //           icon: 'success',
  //           confirmButtonText: 'Close',
  //           confirmButtonColor: '#777777',
  //         }).then(() => {
  //           this.ref.close(true);
  //         });
  //       });
  //     }
  //   });
  // }
  updateBox() {
    const payload = {
      department: this.collegeForm.get('department')?.value,
      full_department: this.collegeForm.get('full_department')?.value
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
        this.http.post('http://localhost:8000/api/add-program', payload).subscribe(response => {
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
  uploadFile(event: any){
    this.form.file = event.target.files[0];
    console.table(this.form.file)
   }
}


