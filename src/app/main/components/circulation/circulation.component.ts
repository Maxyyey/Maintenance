import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from './upload/upload.component';
import { EditComponent } from './edit/edit.component';
import { ArchiveComponent } from '../personnelsetup/archive/archive.component';

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
  onEditBtnClick(){
    this.dialogRef.open(EditComponent, {});
    }
  
  onArchiveBtnClick(){
    this.dialogRef.open(ArchiveComponent, {});
  }
}
