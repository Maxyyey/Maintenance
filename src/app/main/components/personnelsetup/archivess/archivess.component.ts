import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archivess',
  templateUrl: './archivess.component.html',
  styleUrl: './archivess.component.scss',
  
})
export class ArchivessComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchivessComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
