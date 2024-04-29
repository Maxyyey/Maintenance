import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archiveannouncepopup',
  templateUrl: './archiveannouncepopup.component.html',
  styleUrl: './archiveannouncepopup.component.scss',
  
})
export class ArchiveAnnouncePopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchiveAnnouncePopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
