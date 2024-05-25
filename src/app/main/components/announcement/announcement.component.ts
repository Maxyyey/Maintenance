import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { EditAnnouncePopupComponent } from './editannouncepopup/editannouncepopup.component';
import { AnnouncementService } from '@app/services/announcement.service';
import Swal from 'sweetalert2';

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
          this.announcements = announcements
          console.log(this.announcements)
        
      },
      error => {
        console.error(error)
      }
    )
  }

  
  onAddNewBtnClick(){
    let modal = this.dialogRef.open(AddComponent, {});

    modal.afterClosed().subscribe(
      result => {
        console.log(result)
        if(result) {
          this.announcements.unshift(result.success)
        }
      }
    )
    
  }
  onEditBtnClick(id: number){
    this.announcementService.getAnnouncement(id).subscribe(
      announcement => {
        console.log(announcement)
        let modal = this.dialogRef.open(EditAnnouncePopupComponent, {
          data: announcement
        });

        modal.afterClosed().subscribe(
          result => {
            if(result) {
              this.announcements = this.announcements.map(
                announcement => {
                  if(announcement.id === result.success.id) {
                    return {...announcement, ...result.success}
                  }
                  return announcement
                }
              )
            }
          }
        )
      },
      error => {
        console.error(error)
      }
    )
    }
  
  onArchiveBtnClick(id:number){
    Swal.fire({
      title: "Delete Project",
      text: "Are you sure want to delete this project?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.archiveAnnouncement(id)
      }
    });
  }

  archiveAnnouncement(id: number) {
    this.announcementService.archiveAnnouncement(id).subscribe(
      response => {
        Swal.fire({
          title: "Deleting complete!",
          text: "Project has been  deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
        this.announcements = this.announcements.filter(announcement => announcement.id !== id); 
      },
      error => {
        console.error(error)
        Swal.fire({
          title: "error!",
          text: "Something went wrong, please try again later.",
          icon: "error",
        });
      }
    )
  }
  // Component logic here

}

