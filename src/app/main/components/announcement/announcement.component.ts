import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { EditAnnouncePopupComponent } from './editannouncepopup/editannouncepopup.component';
import { ArchiveAnnouncePopupComponent } from '../announcement/archiveannouncepopup/archiveannouncepopup.component';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(AddComponent, {});
    
  }
  onEditBtnClick(){
    this.dialogRef.open(EditAnnouncePopupComponent, {});
    }
  
  onArchiveBtnClick(){
    this.dialogRef.open(ArchiveAnnouncePopupComponent, {});
  }
  // Component logic here
}

