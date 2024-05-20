import { Component, Inject } from '@angular/core';
import { MatDialogRef as MyMatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { AnnouncementService } from '@app/services/announcement.service';
import { response } from 'express';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-archiveannouncepopup',
  templateUrl: './archiveannouncepopup.component.html',
  styleUrl: './archiveannouncepopup.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class ArchiveAnnouncePopupComponent {

  constructor(
    private dialogRef: MyMatDialogRef<ArchiveAnnouncePopupComponent>,
    private announcementService: AnnouncementService,
    @Inject(MAT_DIALOG_DATA) private data: any) {

    }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  archiveAnnouncement(id: number) {
    this.announcementService.archiveAnnouncement(id).subscribe(
      response => {
        console.log(response)
        this.dialogRef.close('Closed using function');
        Swal.fire({
          title: "Deleting complete!",
          text: "Project has been  deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      },
      error => {
        console.error(error)
        Swal.fire({
          title: "error!",
          text: "Something went wrong, please try again later.",
          icon: "error",
        });
        this.dialogRef.close('Closed using function'); 
      }
    )
  }

  archiveBox(){
    this.dialogRef.close('Closed using function');
    Swal.fire({
      title: "Delete Project",
      text: "Are you sure want to delete this project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.archiveAnnouncement(this.data)
      }
    });
}
}
