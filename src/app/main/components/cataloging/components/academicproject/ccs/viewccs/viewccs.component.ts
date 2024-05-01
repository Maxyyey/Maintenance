import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCcsPopupComponent } from '../editccspopup/editccspopup.component';
import { ArchiveCcsPopupComponent } from '../archiveccspopup/archiveccspopup.component';
@Component({
  selector: 'app-viewccs',
  templateUrl: './viewccs.component.html',
  styleUrl: './viewccs.component.scss', // Corrected property name
})
export class ViewCcsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewCcsComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void { }

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditCcsPopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchiveCcsPopupComponent, {});
  }
}
