import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnnouncementService } from '@app/services/announcement.service';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrl: './add-announcement.component.scss'
})
export class AddAnnouncementComponent {
  form: {
    title: string | null,
    category: string | null,
    text: string | null,
    date: string | null,
    file: File | null
  }

  constructor(
    private ref: MatDialogRef<AddAnnouncementComponent>,
    private announcementService: AnnouncementService
  ) {
    const today = new Date();
    this.form = {
      title: '',
      category: '',
      text: '',
      date: today.toISOString().split('T')[0],
      file: null
    }
  }

  ngOnInit(): void {
  }


  createAnnouncements() {
    const formData = new FormData();      //bruhhh like file is not working in ng model
    formData.append('title', this.form.title || '');
    formData.append('category', this.form.category || '');
    formData.append('text', this.form.text || '');
    formData.append('date', this.form.date || '');
    formData.append('file', this.form.file || '');


    this.announcementService.createAnnouncement(formData).subscribe(
      success => {
        Swal.fire({
          title: "Success!",
          text: "Announcement has been successfully created.",
          icon: "success",
        });
        this.ref.close(success);
      },
      error => {
        console.error(error)
        if (error.status == 422) {
          Swal.fire({
            title: "error!",
            text: "Invalid input.",
            icon: "error",
          });
        }
        else {
          Swal.fire({
            title: "error!",
            text: "Something went wrong, please try again later.",
            icon: "error",
          });
        }
      }
    )
  }

  uploadFile(event: any) {
    this.form.file = event.target.files[0];
    console.table(this.form.file)
  }
  // SWEETALERT UPDATE POPUP
  create() {
    console.log(this.form)
    Swal.fire({
      title: "Post New Announcement",
      text: "Are you sure you want to post this announcement?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#4f6f52",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.createAnnouncements()
      }
    });
  }

  // CANCEL EDITING POPUP
  closepopup() {
    Swal.fire({
      title: "Are you sure you want to cancel?",
      text: "Your changes will not be saved.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.ref.close('');
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
