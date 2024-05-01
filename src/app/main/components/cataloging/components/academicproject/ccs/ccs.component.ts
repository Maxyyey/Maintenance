import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewCcsComponent } from './viewccs/viewccs.component';
import { EditCcsPopupComponent } from './editccspopup/editccspopup.component';



@Component({
  selector: 'app-ccs',
  templateUrl: './ccs.component.html',
  styleUrl: './ccs.component.scss'
})
export class CcsComponent {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    
    this.dialogRef.open(ViewCcsComponent, {});
    
  }
  
  editbox(){
    
    this.dialogRef.open(EditCcsPopupComponent, {});
    
  }
}


