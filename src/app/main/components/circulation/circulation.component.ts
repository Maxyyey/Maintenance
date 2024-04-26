import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.scss',
})
export class CirculationComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.dialogRef.open(UploadComponent, {});
  }
  // Component logic here
}
