import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditPopupComponent } from './components/materials/books/editpopup/editpopup.component';




@Component({
  selector: 'app-cataloging',
  templateUrl: './cataloging.component.html',
  styleUrl: './cataloging.component.scss',
})
export class CatalogingComponent implements OnInit{
  constructor(public dialogRef: MatDialog){ }

  ngOnInit(): void { }

  onEditBtnClick(){
    this.dialogRef.open(EditPopupComponent, {});
  }
}

 