import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { EditAnnouncePopupComponent } from './editannouncepopup/editannouncepopup.component';
import { ArchiveAnnouncePopupComponent } from '../announcement/archiveannouncepopup/archiveannouncepopup.component';
import { AnnouncementService } from '@app/services/announcement.service';
import { error } from 'console';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent implements OnInit{
  announcements: any[] = []

  constructor(
    private dialogRef : MatDialog, 
    private announcementService: AnnouncementService) { }

  ngOnInit() { 
    this.getAnnouncements()
  }
  getAnnouncements(){
    this.announcementService.getAnnouncements().subscribe(
      announcements => {
          this.announcements = announcements.announcements 
          console.log(this.announcements)
        
      },
      error => {
        console.error(error)
      }
    )
  }

  
  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(AddComponent, {});
    
  }
  onEditBtnClick(id: number){
    this.announcementService.getAnnouncement(id).subscribe(
      announcement => {
        console.log(announcement)
        this.dialogRef.open(EditAnnouncePopupComponent, {
          data: announcement.announcement
        });
      },
      error => {
        console.error(error)
      }
    )
    }
  
  onArchiveBtnClick(id:number){
    this.dialogRef.open(ArchiveAnnouncePopupComponent, {
      data: id
    });
  }
  // Component logic here

}

