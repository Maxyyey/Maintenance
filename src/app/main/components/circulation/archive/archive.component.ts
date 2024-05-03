import { Component, Inject } from '@angular/core';
import { MatDialogRef as MyMatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss',
  host: {
    '[attr.extraHostAttribute]': 'true'
  },
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class ArchiveComponent {

  constructor(public dialogRef: MyMatDialogRef<ArchiveComponent>) {}

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  archiveBox(){
    this.dialogRef.close('Closed using function');
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
        this.dialogRef.close('Closed using function');
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
}


