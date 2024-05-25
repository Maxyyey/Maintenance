import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPopupComponent } from './addpopup/addpopup.component';
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
[x: string]: any;


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

  selectedDepartment: string;
  programAbbreviation: string;
  projectCategory: string;
  programName: string;




  constructor(private router: Router, private ref: MatDialogRef<AddiconacadComponent>, private buildr: FormBuilder, private dialogRef: MatDialog,
    private http: HttpClient) {
    this.selectedOption1 = ''; // Initialize selectedOption1 in the constructor
    this.selectedOption2 = '';
    this.selectedOption3 = '';
    this.selectedDepartment = '';
    this.programAbbreviation= '';
    this.projectCategory= '';
    this.programName= '';
    
  }

  onOption1Change() {
    // Logic for populating PROGRAM based on COLLEGE DEPARTMENT

    // CCS -------------------------------------------------
    if (this.selectedOption1 === 'CCS') {
      this.options2 = [
        { value: 'BSCS', label: 'BSCS' },
        { value: 'BSIT', label: 'BSIT' },
        { value: 'BSEMC', label: 'BSEMC' },
        { value: 'ACT', label: 'ACT' },
      ];
    }
    // CBA -------------------------------------------------
    else if (this.selectedOption1 === 'CBA') {
      this.options2 = [
        { value: 'BSA', label: 'BSA' },
        { value: 'BSCA', label: 'BSCA' },
        { value: 'BSBA-FM', label: 'BSBA-FM' },
        { value: 'BSBA-MKT', label: 'BSBA-MKT' },
        { value: 'BSBA-HRM', label: 'BSBA-HRM' },
      ];
    }
    // CEAS -------------------------------------------------
    else if (this.selectedOption1 === 'CEAS') {
      this.options2 = [
        { value: 'BACOMM', label: 'BACOMM' },
        { value: 'BEED', label: 'BEED' },
        { value: 'BPED', label: 'BPED' },
        { value: 'BCAED', label: 'BCAED' },
        { value: 'BECED', label: 'BECED' },
        { value: 'BSED-ENG', label: 'BSED-ENG' },
        { value: 'BSED-FIL', label: 'BSED-FIL' },
        { value: 'BSED-MATH', label: 'BSED-MATH' },
        { value: 'BSED-SCI', label: 'BSED-SCI' },
        { value: 'BSED-SOC', label: 'BSED-SOC' }
      ];
    }
    // CAHS -------------------------------------------------
    else if (this.selectedOption1 === 'CAHS') {
      this.options2 = [
        { value: 'BSM', label: 'BSM' },
        { value: 'BSN', label: 'BSN' }
      ];
    }
    // CHTM -------------------------------------------------
    else if (this.selectedOption1 === 'CHTM') {
      this.options2 = [
        { value: 'BSHM', label: 'BSHM' },
        { value: 'BSTM', label: 'BSTM' }
      ];
    } 
    
    else {
      this.options2 = [];
    }

    this.selectedOption2 = '';
    this.options3 = []; // Reset options3 when the first select menu changes
    this.selectedOption3 = ''; // Reset selectedOption3 when the first select menu changes
  }


  onOption2Change() {
    // Logic for populating PROJECT TYPE based on COLLEGE PROGRAM

    // CCS PROGRAMS -------------------------------------------------
    if (this.selectedOption2 === 'BSCS') {
      this.options3 = [
        { value: 'Thesis', label: 'Thesis' }
      ];
    } 
    else if (this.selectedOption2 === 'BSIT') {
      this.options3 = [
        { value: 'Capstone', label: 'Capstone' }
      ];
    } 
    else if (this.selectedOption2 === 'BSEMC') {
      this.options3 = [
        { value: '', label: '' }
      ];
    } 
    else if (this.selectedOption2 === 'ACT') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    // CBA PROGRAMS -------------------------------------------------
    else if (this.selectedOption2 === 'BSA') {
      this.options3 = [
        { value: '', label: '' }
      ];
    } 
    else if (this.selectedOption2 === 'BSCA') {
      this.options3 = [
        { value: '', label: '' }
      ];
    } 
    else if (this.selectedOption2 === 'BSBA-FM') {
      this.options3 = [
        { value: 'Feasibility', label: 'Feasibility' }
      ];
    } 
    else if (this.selectedOption2 === 'BSBA-MKT') {
      this.options3 = [
        { value: '', label: '' }
      ];
    } 
    else if (this.selectedOption2 === 'BSBA-HRM') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }

    // CEAS PROGRAMS -------------------------------------------------
    else if (this.selectedOption2 === 'BACOMM') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BEED') {
      this.options3 = [
        { value: 'Classroom Based Action Research', label: 'Classroom Based Action Research' }
      ];
    }
    else if (this.selectedOption2 === 'BPED') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BCAED') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BECED') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BSED-ENG') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BSED-FIL') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BSED-MATH') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BSED-SCI') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }
    else if (this.selectedOption2 === 'BSED-SOC') {
      this.options3 = [
        { value: '', label: '' }
      ];
    }

    // CAHS PROGRAMS -------------------------------------------------
    else if (this.selectedOption2 === 'BSN') {
      this.options3 = [
        { value: 'Case Presentation', label: 'Case Presentation' }
      ];
    } 
    else if (this.selectedOption2 === 'BSM') {
      this.options3 = [
        { value: 'Case Presentation', label: 'Case Presentation' }
      ];
    }
    // CHTM PROGRAMS -------------------------------------------------
    else if (this.selectedOption2 === 'BSTM') {
      this.options3 = [
        { value: 'Thesis', label: 'Thesis' }
      ];
    } 
    else if (this.selectedOption2 === 'BSHM') {
      this.options3 = [
        { value: 'Thesis', label: 'Thesis' }
      ];
    } 

    else {
      this.options3 = [];
    }

    this.selectedOption3 = '';
  }


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

  closepopup() {
    this.ref.close('Closed using function');
  }
  onAddBtnClick() {
    this.dialogRef.open(AddPopupComponent, {});
    this.ref.close('Closed using function');
  }
  

  // SWEETALERT UPDATE POPUP
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
      title: "Add Patron",
      text: "Are you sure you want to add this patron?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#31A463",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        // Send data to backend
        this['http'].post('http://localhost:8000/add-program', { payload })
          .subscribe(
            (response: any) => {
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
}


