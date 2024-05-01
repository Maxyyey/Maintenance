import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCahsPopupComponent } from '../editcahspopup/editcahspopup.component';
import { ArchiveCahsPopupComponent } from '../archivecahspopup/archivecahspopup.component';
import { FormBuilder } from '@angular/forms';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-viewcahs',
  templateUrl: './viewcahs.component.html',
  styleUrls: ['./viewcahs.component.scss']
})
export class ViewCahsComponent implements OnInit{
  protected image: any = null;

  ngOnInit(): void {

   
  }

  constructor(
    private ref: MatDialogRef<ViewCahsComponent>, 
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
