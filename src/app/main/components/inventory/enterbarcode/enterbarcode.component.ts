import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enterbarcode',
  templateUrl: './enterbarcode.component.html',
  styleUrl: './enterbarcode.component.scss'
})
export class EnterbarcodeComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EnterbarcodeComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}



