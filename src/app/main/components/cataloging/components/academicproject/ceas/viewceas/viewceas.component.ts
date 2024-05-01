import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditCeasModalComponent } from '../editceasmodal/editceasmodal.component';
import { ArchiveCeasModalComponent } from '../archiveceasmodal/archiveceasmodal.component';

@Component({
  selector: 'app-viewceas',
  templateUrl: './viewceas.component.html',
  styleUrl: './viewceas.component.scss'
})
export class ViewCeasComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewCeasComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void {}

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditCeasModalComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchiveCeasModalComponent, {});
  }
}
