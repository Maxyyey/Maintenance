import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewChtmComponent } from './viewchtm/viewchtm.component';



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
  
}


