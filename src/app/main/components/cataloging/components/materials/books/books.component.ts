import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewcatalogingComponent } from './viewbooks/viewcataloging.component';

import { EditPopupComponent } from './editpopup/editpopup.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(ViewcatalogingComponent, {});
    
  }
  editbox(){
    
    this.dialogRef.open(EditPopupComponent, {});
    
  }
  // Component logic here
}

