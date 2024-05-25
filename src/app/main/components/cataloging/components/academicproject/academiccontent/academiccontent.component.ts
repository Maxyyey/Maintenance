import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddiconacadComponent } from './addiconacad/addiconacad.component';
import { ViewComponent } from './viewccs/view.component';
import { ViewCbaComponent } from './cba/viewcba.component';
import { ViewChtmComponent } from './chtm/viewchtm.component';
import { ViewCahsComponent } from './cahs/viewcahs.component';
import { ViewCeasComponent } from './ceas/viewceas.component';
import { AddPopupComponent } from './addpopup/addpopup.component';
@Component({
  selector: 'app-academiccontent',
  templateUrl: './academiccontent.component.html',
  styleUrl: './academiccontent.component.scss',
})
export class AcademiccontentComponent implements OnInit {
  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    // Initialize component properties or fetch data here
  }
  onAddCollegeClick() {
    this.dialogRef.open(AddPopupComponent, {});

  }
  onAddNewBtnClick(){
    this.dialogRef.open(AddiconacadComponent, {});
  }

  onViewBtnClick(){
    this.dialogRef.open(ViewComponent, {});
  }

  onViewCbaBtnClick(){
    this.dialogRef.open(ViewCbaComponent, {});
  }
  onViewChtmBtnClick(){
    this.dialogRef.open(ViewChtmComponent, {});
  }
  onViewCahsBtnClick(){
    this.dialogRef.open(ViewCahsComponent, {});
  }
  onViewCeasBtnClick(){
    this.dialogRef.open(ViewCeasComponent, {});
  }


  // Other component logic goes here
}
