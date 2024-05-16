import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from '@app/services/announcement.service';


import Swal from 'sweetalert2';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class AddComponent {
  form: {
    title: string | null,
    category: string | null,
    content: string | null,
    date: string | null,
    file: File | null
  }
  
  constructor(
    private ref: MatDialogRef<AddComponent>,
    private announcementService: AnnouncementService
  ) {
      this.form = {
        title: '',
        category: '',
        content: '',
        date: '',
        file: null
      }
}

  ngOnInit(): void {
  }

  closepopup() {
    console.log(this.form)
    this.ref.close('Closed using function');
  }

  // SWEETALERT UPDATE POPUP
  create(){
    Swal.fire({
      title: "Post New Announcement",
      text: "Are you sure you want to post this announcement?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#31A463",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.announcementService.createAnnouncement(this.form).subscribe(
          success => {
            if(success.error) {
              Swal.fire({
                title: "error!",
                text: "Your inputs are invalid.",
                icon: "error",
                // confirmButtonText: 'Close',
                // confirmButtonColor: "#777777",
              });
            }
            else {
              Swal.fire({
                title: "Success!",
                text: "Announcement has been successfully created.",
                icon: "success",
                // confirmButtonText: 'Close',
                // confirmButtonColor: "#777777",
              });
              this.ref.close('Closed using function'); 
            }
          },
          error => {
            console.error(error)
            Swal.fire({
              title: "error!",
              text: "Something went wrong, please try again later.",
              icon: "error",
              // confirmButtonText: 'Close',
              // confirmButtonColor: "#777777",
            });
            //error message/swal here
            // this.ref.close('Closed using function'); 
          },
          () => {
          }
        )
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


