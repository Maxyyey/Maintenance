import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddiconacadComponent } from './addiconacad/addiconacad.component';
import { ViewComponent } from './viewccs/view.component';
import { ViewCbaComponent } from './cba/viewcba.component';

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

  onAddNewBtnClick(){
    this.dialogRef.open(AddiconacadComponent, {});
  }

  onViewBtnClick(){
    this.dialogRef.open(ViewComponent, {});
  }

  onViewCbaBtnClick(){
    this.dialogRef.open(ViewCbaComponent, {});
  }

  // Other component logic goes here
}
