import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editcahspopup',
  templateUrl: './editcahspopup.component.html',
  styleUrl: './editcahspopup.component.scss',
  
})
export class EditCahsPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditCahsPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
