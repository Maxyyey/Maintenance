import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditCcsPopupComponent } from './editccspopup/editccspopup.component';
import { ArchiveCcsPopupComponent } from './archiveccspopup/archiveccspopup.component';

@Component({
  selector: 'app-ccs',
  templateUrl: './ccs.component.html',
  styleUrl: './ccs.component.scss',
})
<<<<<<< Updated upstream
export class CcsComponent {
onAddNewBtnClick() {
throw new Error('Method not implemented.');
}
=======
export class CcsComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }
>>>>>>> Stashed changes

  ngOnInit(): void { }


  onEditBtnClick(){
    this.dialogRef.open(EditCcsPopupComponent,{});
  }
  onArchiveBtnClick(){
    this.dialogRef.open(ArchiveCcsPopupComponent,{});
  }
  // Component logic here
}
