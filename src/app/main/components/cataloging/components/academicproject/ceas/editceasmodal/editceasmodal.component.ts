import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editceasmodalpopup',
  templateUrl: './editceasmodal.component.html',
  styleUrl: './editceasmodal.component.scss',
  
})
export class EditCeasModalComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditCeasModalComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
