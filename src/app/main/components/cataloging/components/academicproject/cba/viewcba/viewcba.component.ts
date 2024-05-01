import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCbaPopupComponent } from '../editcbapopup/editcbapopup.component';
import { ArchiveCbaPopupComponent } from '../archivecbapopup/archivecbapopup.component';
@Component({
  selector: 'app-viewcba',
  templateUrl: './viewcba.component.html',
  styleUrl: './viewcba.component.scss', // Corrected property name
})
export class ViewCbaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewCbaComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void { }

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditCbaPopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchiveCbaPopupComponent, {});
  }
}
