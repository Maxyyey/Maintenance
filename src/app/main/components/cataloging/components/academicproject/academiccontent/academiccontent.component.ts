import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddiconacadComponent } from './addiconacad/addiconacad.component';

@Component({
  selector: 'app-academiccontent',
  templateUrl: './academiccontent.component.html',
  styleUrls: ['./academiccontent.component.scss'],
})
export class AcademiccontentComponent implements OnInit {
  constructor(private dialogRef : MatDialog) { }
 // Assuming Book is the type of objects in the 'books' array
 // isLoading: boolean = false;
  //dialogRef: any;


  ngOnInit(): void {
    // Initialize component properties or fetch data here
  }

  onAddNewBtnClick(){
    this.dialogRef.open(AddiconacadComponent, {});
  }

  // Other component logic goes here
}
