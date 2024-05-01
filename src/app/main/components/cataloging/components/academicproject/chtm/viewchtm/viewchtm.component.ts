import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditChtmPopup1Component } from '../editchtmpopup1/editchtmpopup1.component';
import { ArchiveChtmPopup1Component } from '../archivechtmpopup1/archivechtmpopup1.component';

@Component({
  selector: 'app-viewchtm',
  templateUrl: './viewchtm.component.html',
  styleUrl: './viewchtm.component.scss'
})
export class ViewChtmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewChtmComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void {}

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditChtmPopup1Component, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchiveChtmPopup1Component, {});
  }
}
