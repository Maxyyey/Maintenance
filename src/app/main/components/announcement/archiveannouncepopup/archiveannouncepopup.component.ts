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

  constructor(public dialogRef: MyMatDialogRef<ArchiveAnnouncePopupComponent>) {}

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  archiveBox(){
    this.dialogRef.close('Closed using function');
    Swal.fire({
      title: "Archiving complete!",
      text: "Project has been safely archived.",
      icon: "success",
      confirmButtonText: 'Close',
      confirmButtonColor: "#777777",
    });
  
}
}