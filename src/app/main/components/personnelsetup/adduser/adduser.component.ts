import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.scss',
  
})
export class AddUserComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AddUserComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
