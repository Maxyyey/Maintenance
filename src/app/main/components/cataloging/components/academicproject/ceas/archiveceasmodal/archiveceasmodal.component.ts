import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archiveceasmodal',
  templateUrl: './archiveceasmodal.component.html',
  styleUrl: './archiveceasmodal.component.scss'
})
export class ArchiveCeasModalComponent {
// Component logic here
constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchiveCeasModalComponent>) {

}
closepopup() {
  this.ref.close('Closed using function');
}
}
