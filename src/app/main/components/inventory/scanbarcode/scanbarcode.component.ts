import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-scanbarcode',
  templateUrl: './scanbarcode.component.html',
  styleUrl: './scanbarcode.component.scss'
})
export class ScanbarcodeComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ScanbarcodeComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
