import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editchtmpopup1popup',
  templateUrl: './editchtmpopup1.component.html',
  styleUrl: './editchtmpopup1.component.scss',
  
})
export class EditChtmPopup1Component {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditChtmPopup1Component>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
