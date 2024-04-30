import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archivechtmpopup1',
  templateUrl: './archivechtmpopup1.component.html',
  styleUrl: './archivechtmpopup1.component.scss'
})
export class Archivechtmpopup1Component {
// Component logic here
constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<Archivechtmpopup1Component>) {

}
closepopup() {
  this.ref.close('Closed using function');
}
}
