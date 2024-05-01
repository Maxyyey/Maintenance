import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewCeasComponent } from './viewceas/viewceas.component'; 
import { EditCeasModalComponent } from './editceasmodal/editceasmodal.component';


@Component({
  selector: 'app-ceas',
  templateUrl: './ceas.component.html',
  styleUrl: './ceas.component.scss'
})
export class CeasComponent {
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    
    this.dialogRef.open(ViewCeasComponent, {});
    
  }

  editbox(){
    
    this.dialogRef.open(EditCeasModalComponent, {});
    
  }

}
