import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditcbapopupComponent } from '../editcbapopup/editcbapopup.component';
import { ArchivecbapopupComponent } from '../archivecbapopup/archivecbapopup.component';

@Component({
  selector: 'app-viewcba',
  templateUrl: './viewcba.component.html',
  styleUrl: './viewcba.component.scss'
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
    const dialogRef = this.dialog.open(EditcbapopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchivecbapopupComponent, {});
  }

}
