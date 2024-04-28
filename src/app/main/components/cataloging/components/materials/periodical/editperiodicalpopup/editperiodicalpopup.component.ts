import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editperiodicalpopup',
  templateUrl: './editperiodicalpopup.component.html',
  styleUrl: './editperiodicalpopup.component.scss',
  
})
export class EditPeriodicalPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditPeriodicalPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
