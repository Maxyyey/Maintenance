import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.component.html',
  styleUrl: './editpopup.component.scss',
  
})
export class EditPopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditPopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
