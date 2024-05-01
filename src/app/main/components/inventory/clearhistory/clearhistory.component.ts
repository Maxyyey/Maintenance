import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clearhistory1Component } from '../clearhistory1/clearhistory1.component';

@Component({
  selector: 'app-clearhistory',
  templateUrl: './clearhistory.component.html',
  styleUrls: ['./clearhistory.component.scss'] // Corrected property name
})
export class ClearhistoryComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ClearhistoryComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void { }

  //onEditBtnClick(){
    // Open the EditPopupComponent dialog
    //const dialogRef = this.dialog.open(EditCahsPopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  
  onClear1BtnClick(){
    const dialogRef = this.dialog.open(Clearhistory1Component, {});
  }

}

