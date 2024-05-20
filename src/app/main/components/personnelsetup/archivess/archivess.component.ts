import { Component, Inject } from '@angular/core';
import { MatDialogRef as MyMatDialogRef} from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';
import { PersonnelService } from '@app/services/personnel.service';
import { response } from 'express';
import { error } from 'console';

interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-archivess',
  templateUrl: './archivess.component.html',
  styleUrl: './archivess.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  
})
export class ArchivessComponent {

constructor(
  public dialogRef: MyMatDialogRef<ArchivessComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private personnelService: PersonnelService) {}

    closepopup() {
      this.dialogRef.close('Closed using function');
    }

    deletePersonnel() {
      this.personnelService.deletePersonnel(this.data).subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        },
        () => {
          this.dialogRef.close('Closed using function');
          Swal.fire({
            title: "Deleting complete!",
            text: "Project has been deleted.",
            icon: "success",
            confirmButtonText: 'Close',
            confirmButtonColor: "#777777",
          });
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
          this.deletePersonnel()
        }
      });
  }
  }
  