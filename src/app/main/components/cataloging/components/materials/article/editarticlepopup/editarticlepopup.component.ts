import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-editarticlepopup',
  templateUrl: './editarticlepopup.component.html',
  styleUrl: './editarticlepopup.component.scss',
  
})
export class EditArticlePopupComponent {

  // Component logic here
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<EditArticlePopupComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
