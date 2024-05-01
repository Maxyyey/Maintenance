import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditChtmPopup1Component } from '../editchtmpopup1/editchtmpopup1.component';
import { ArchiveChtmPopup1Component } from '../archivechtmpopup1/archivechtmpopup1.component';
import { FormBuilder } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewchtm',
  templateUrl: './viewchtm.component.html',
  styleUrl: './viewchtm.component.scss'
})
export class ViewChtmComponent {
  protected image: any = null;

  ngOnInit(): void {

  }

  constructor(
    private ref: MatDialogRef<ViewChtmComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private buildr: FormBuilder, 
  ) { }

  closepopup() {
    this.ref.close('Closed using function');
  }


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
}