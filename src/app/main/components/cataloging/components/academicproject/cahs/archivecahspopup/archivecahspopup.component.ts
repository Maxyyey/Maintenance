import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archivecahspopup',
  templateUrl: './archivecahspopup.component.html',
  styleUrl: './archivecahspopup.component.scss',
  
})
export class ArchiveCahsPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchiveCahsPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
