import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCahsPopupComponent } from '../editcahspopup/editcahspopup.component';
import { ArchiveCahsPopupComponent } from '../archivecahspopup/archivecahspopup.component';
@Component({
  selector: 'app-viewcahs',
  templateUrl: './viewcahs.component.html',
  styleUrls: ['./viewcahs.component.scss'] // Corrected property name
})
export class ViewCahsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewCahsComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void { }

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditCahsPopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchiveCahsPopupComponent, {});
  }
}