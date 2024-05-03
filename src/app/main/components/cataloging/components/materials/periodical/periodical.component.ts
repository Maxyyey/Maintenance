import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewPeriodicalComponent } from './viewperiodical/viewperiodical.component';

import { EditPeriodicalPopupComponent } from './editperiodicalpopup/editperiodicalpopup.component';


@Component({
  selector: 'app-periodical',
  templateUrl: './periodical.component.html',
  styleUrl: './periodical.component.scss'
})
export class PeriodicalComponent {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(ViewPeriodicalComponent, {});
    
  }
  editbox(){
    
    this.dialogRef.open(EditPeriodicalPopupComponent, {});
    
  }
  // Component logic here
}


