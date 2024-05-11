import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archivepopup',
  templateUrl: './archivepopup.component.html',
  styleUrl: './archivepopup.component.scss',
  
})
export class ArchivePopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchivePopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}