import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Editchtmpopup1Component } from '../editchtmpopup1/editchtmpopup1.component';
import { Archivechtmpopup1Component } from '../archivechtmpopup1/archivechtmpopup1.component';

@Component({
  selector: 'app-viewchtm',
  templateUrl: './viewchtm.component.html',
  styleUrl: './viewchtm.component.scss'
})
export class ViewchtmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewchtmComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void {}

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(Editchtmpopup1Component, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(Archivechtmpopup1Component, {});
  }
}
