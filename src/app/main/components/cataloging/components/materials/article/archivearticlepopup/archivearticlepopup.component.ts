import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-archivearticlepopup',
  templateUrl: './archivearticlepopup.component.html',
  styleUrl: './archivearticlepopup.component.scss',
  
})
export class ArchiveArticlePopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ArchiveArticlePopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
