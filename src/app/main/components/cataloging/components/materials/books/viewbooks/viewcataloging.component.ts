import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPopupComponent } from '../editpopup/editpopup.component';
import { ArchivePopupComponent } from '../archivepopup/archivepopup.component';
@Component({
  selector: 'app-viewcataloging',
  templateUrl: './viewcataloging.component.html',
  styleUrls: ['./viewcataloging.component.scss'] // Corrected property name
})
export class ViewcatalogingComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewcatalogingComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void { }

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditPopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchivePopupComponent, {});
  }
}
