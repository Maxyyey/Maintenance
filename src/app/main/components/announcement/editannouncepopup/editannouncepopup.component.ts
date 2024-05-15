import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import Swal from 'sweetalert2';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-editannouncepopup',
  templateUrl: './editannouncepopup.component.html',
  styleUrl: './editannouncepopup.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class EditAnnouncePopupComponent {

  options1 = [
    { value: 'Available', label: 'Available' },
    { value: 'Not Available', label: 'Not Available' },
    { value: 'Damaged', label: 'Damaged' },
  ];
  options2: MyOption[] = [];
  options3: MyOption[] = [];

  selectedOption1: string;
  selectedOption2: string;
  selectedOption3: string;

  title: string = ''
  category: string = ''
  text: string = ''
  date: any = ''

  constructor(
    private router: Router, 
    private ref: MatDialogRef<EditAnnouncePopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.selectedOption1 = ''; // Initialize selectedOption1 in the constructor
    this.selectedOption2 = '';
    this.selectedOption3 = '';
  }

  


 


  // DYNAMIC ADD MULTIPLE AUTHOR
  ngOnInit() {
    console.log(this.data)
    this.title = this.data.title
    this.category = this.data.category
    this.text = this.data.text
    this.date = this.data.date
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

  // SWEETALERT UPDATE POPUP
  updateBox(){
    Swal.fire({
      title: "Update Announcement",
      text: "Are you sure you want to update this announcement?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#31A463",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.ref.close('Closed using function');
        Swal.fire({
          title: "Update successful!",
          text: "The changes have been saved.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
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


