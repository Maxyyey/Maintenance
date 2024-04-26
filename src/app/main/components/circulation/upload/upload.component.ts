import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss',
})
export class UploadComponent {
  // Component logic here
constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<UploadComponent>) {  

}
closepopup() {
  this.ref.close('Closed using function');
}
}