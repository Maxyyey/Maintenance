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
  form: {
    title: string 
    category: string 
    content: string 
    date: any 
    file: File | null
  }

  constructor(
    private router: Router, 
    private ref: MatDialogRef<EditAnnouncePopupComponent>, 
    private announcementService: AnnouncementService,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.form = {
        title: '',
        category: '',
        content: '',
        date: '',
        file: null
      }
  }

  // DYNAMIC ADD MULTIPLE AUTHOR
  ngOnInit() {
    this.getOldValues() 
    // console.log(this.data)
  }

  getOldValues() {
    this.form = {
      title: this.data.title,
      category: this.data.category,
      content: this.data.content,
      date: this.data.date,
      file: null
    }
  }

  updateAnnouncement() {
    const formData = new FormData();      //bruhhh like file is not working in ng model
    formData.append('title', this.form.title);
    formData.append('category', this.form.category);
    formData.append('content', this.form.content);
    formData.append('date', this.form.date);
    formData.append('file', this.form.file || '');

    // console.log(formData)
    

    this.announcementService.updateAnnouncement(this.data.id, formData).subscribe(
      response => {
        Swal.fire({
          title: "Update successful!",
          text: "The changes have been saved.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
        console.log(response)
        this.ref.close('Closed using function');
      },
      error => {
        console.error(error)
      }
    )
  }

  uploadFile(event: any){
    this.form.file = event.target.files[0];
    console.table(this.form.file) 
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
        this.updateAnnouncement()
      }
    });
  }


  closepopup(){
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


