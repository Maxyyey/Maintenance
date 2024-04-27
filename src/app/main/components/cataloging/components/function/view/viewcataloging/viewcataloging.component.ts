import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewcataloging',
  templateUrl: './viewcataloging.component.html',
  styleUrl: './viewcataloging.component.scss'
})
export class ViewcatalogingComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<ViewcatalogingComponent>) {

  }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
