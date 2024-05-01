import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewChtmComponent } from './viewchtm/viewchtm.component';
import { EditChtmPopup1Component } from './editchtmpopup1/editchtmpopup1.component';

@Component({
  selector: 'app-chtm',
  templateUrl: './chtm.component.html',
  styleUrl: './chtm.component.scss'
})
export class ChtmComponent {
  
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    
    this.dialogRef.open(ViewChtmComponent, {});
    
  }

  editbox(){
    
    this.dialogRef.open(EditChtmPopup1Component, {});
    
  }
}
