import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archiveperiodicalpopup',
  templateUrl: './archiveperiodicalpopup.component.html',
  styleUrl: './archiveperiodicalpopup.component.scss',
  
})
export class ArchivePeriodicalPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchivePeriodicalPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
