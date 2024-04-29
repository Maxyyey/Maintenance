import { Component,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-clearhistory',
  templateUrl: './clearhistory.component.html',
  styleUrl: './clearhistory.component.scss'
})
export class ClearhistoryComponent  {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ClearhistoryComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}

