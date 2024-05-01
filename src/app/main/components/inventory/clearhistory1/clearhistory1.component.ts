import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-clearhistory1',
  templateUrl: './clearhistory1.component.html',
  styleUrl: './clearhistory1.component.scss',
  
})
export class Clearhistory1Component {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<Clearhistory1Component>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
