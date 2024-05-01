import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewCahsComponent } from './viewcahs/viewcahs.component';
import { EditCahsPopupComponent } from './editcahspopup/editcahspopup.component';



@Component({
  selector: 'app-cahs',
  templateUrl: './cahs.component.html',
  styleUrl: './cahs.component.scss'
})
export class CahsComponent {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    
    this.dialogRef.open(ViewCahsComponent, {});
    
  }

  editbox(){
    
    this.dialogRef.open(EditCahsPopupComponent, {});
    
  }
  
}


