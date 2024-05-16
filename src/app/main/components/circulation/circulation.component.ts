import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from './upload/upload.component';
import { EditComponent } from './edit/edit.component';
import { ArchiveComponent } from '../circulation/archive/archive.component';
import { PatronService } from '@app/services/patron.service';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.scss',
})
export class CirculationComponent implements OnInit{
  patrons: any = []

  constructor(
    private dialogRef : MatDialog,
    private patronService: PatronService) { }

  ngOnInit() { 
    this.getPatrons()
  }

  getPatrons() {
    this.patronService.getPatrons().subscribe(
      patrons => {
        this.patrons = patrons
      },
      error => {
        console.error(error)
      }
    )
  }

  onAddNewBtnClick(){
    this.dialogRef.open(UploadComponent, {});
  }
  onEditBtnClick(id:number){
    this.patronService.getPatron(id).subscribe(
      patron => {
        this.dialogRef.open(EditComponent, {
          data: patron
        });
      },
      error => {
        console.error(error)
      }

    )
  }
  
  onArchiveBtnClick(){
    this.dialogRef.open(ArchiveComponent, {});
  }
}
