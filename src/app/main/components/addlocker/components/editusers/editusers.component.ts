import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrl: './editusers.component.scss',
  
})
export class EditUsersComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditUsersComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
