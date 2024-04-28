import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Import MatDialog
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPeriodicalPopupComponent } from '../editperiodicalpopup/editperiodicalpopup.component';
import { ArchivePeriodicalPopupComponent } from '../archiveperiodicalpopup/archiveperiodicalpopup.component';
@Component({
  selector: 'app-viewperiodical',
  templateUrl: './viewperiodical.component.html',
  styleUrls: ['./viewperiodical.component.scss'] // Corrected property name
})
export class ViewPeriodicalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ViewPeriodicalComponent>, private dialog: MatDialog) {
    // Inject MatDialogRef and MatDialog
  }

  closepopup() {
    this.dialogRef.close('Closed using function');
  }

  ngOnInit(): void { }

  onEditBtnClick(){
    // Open the EditPopupComponent dialog
    const dialogRef = this.dialog.open(EditPeriodicalPopupComponent, {});
    // If you need to do something with the dialog reference, you can assign it to a class variable
    // this.dialogRef = dialogRef;
  }
  onArchiveBtnClick(){
    const dialogRef = this.dialog.open(ArchivePeriodicalPopupComponent, {});
  }
}
