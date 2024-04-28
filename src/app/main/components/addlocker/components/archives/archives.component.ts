import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archive',
  templateUrl: './archives.component.html',
  styleUrl: './archives.component.scss',
  
})
export class ArchiveComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchiveComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
