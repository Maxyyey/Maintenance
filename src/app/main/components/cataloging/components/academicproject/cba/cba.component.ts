import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewCbaComponent } from './viewcba/viewcba.component';



@Component({
  selector: 'app-cba',
  templateUrl: './cba.component.html',
  styleUrl: './cba.component.scss'
})
export class CbaComponent {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    
    this.dialogRef.open(ViewCbaComponent, {});
    
  }
  
}


