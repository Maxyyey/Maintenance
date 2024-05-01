import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editcbapopup',
  templateUrl: './editcbapopup.component.html',
  styleUrl: './editcbapopup.component.scss',
  
})
export class EditCbaPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditCbaPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
