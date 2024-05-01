import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archivecbapopup',
  templateUrl: './archivecbapopup.component.html',
  styleUrl: './archivecbapopup.component.scss',
  
})
export class ArchiveCbaPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchiveCbaPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
