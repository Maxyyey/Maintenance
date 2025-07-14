import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { AddAnnouncementComponent } from "./add-announcement/add-announcement.component"
import { EditAnnouncePopupComponent } from "./editannouncepopup/editannouncepopup.component"
import { AnnouncementService } from "@app/services/announcement.service"
import Swal from "sweetalert2"
import { DataService } from "@app/services/data.service"

@Component({
     selector: "app-announcement",
     templateUrl: "./announcement.component.html",
     styleUrl: "./announcement.component.scss",
})
export class AnnouncementComponent implements OnInit {
     announcements: any[] = []
     filteredAnnouncements: any[] = [] // Added for filtering
     currentPage = 1
     itemsPerPage = 7 // Set to 5 cards per page
     isModalOpen: boolean = false
     isLoading = true

     constructor(private dialogRef: MatDialog, private announcementService: AnnouncementService, private ds: DataService) {}

     ngOnInit() {
          this.getAnnouncements()
     }

     getAnnouncements() {
          this.isLoading = true
          this.announcementService.getAnnouncements().subscribe(
               (announcements) => {
                    this.announcements = announcements
                    this.filteredAnnouncements = [...this.announcements] // Initialize filteredAnnouncements
                    this.isLoading = false
               },
               (error) => {
                    console.error(error)
               }
          )
     }

     get totalPages(): number {
          return Math.ceil(this.filteredAnnouncements.length / this.itemsPerPage)
     }

     paginatedAnnouncements(): any[] {
          const startIndex = (this.currentPage - 1) * this.itemsPerPage
          const endIndex = startIndex + this.itemsPerPage
          return this.filteredAnnouncements.slice(startIndex, endIndex)
     }

     previousPage(): void {
          if (this.currentPage > 1) {
               this.currentPage--
          }
     }

     nextPage(): void {
          if (this.currentPage < this.totalPages) {
               this.currentPage++
          }
     }

     onAddNewBtnClick() {
          if (this.isModalOpen) {
               return
          }

          this.isModalOpen = true

          let modal = this.dialogRef.open(AddAnnouncementComponent, {})
          modal.afterClosed().subscribe((result) => {
               this.isModalOpen = false

               if (result) {
                    this.announcements.unshift(result.success)
                    this.filteredAnnouncements = [...this.announcements] // Update filteredAnnouncements after adding new announcement
               }
          })
     }

     onEditBtnClick(id: number) {
          if (this.isModalOpen) {
               return
          }

          this.isModalOpen = true

          this.announcementService.getAnnouncement(id).subscribe(
               (announcement) => {
                    let modal = this.dialogRef.open(EditAnnouncePopupComponent, {
                         data: announcement,
                    })
                    modal.afterClosed().subscribe((result) => {
                         this.isModalOpen = false
                         if (result) {
                              // Update announcement in both lists
                              this.announcements = this.announcements.map((a: any) => (a.id === result.success.id ? result.success : a))
                              this.filteredAnnouncements = this.filteredAnnouncements.map((a: any) => (a.id === result.success.id ? result.success : a))
                         }
                    })
               },
               (error) => {
                    console.error(error)
                    this.isModalOpen = false
                    Swal.fire({
                         title: "Error!",
                         text: "Something went wrong. Please try again later.",
                         icon: "error",
                         confirmButtonText: "Close",
                         confirmButtonColor: "#777777",
                    })
               }
          )
     }

     deleteAnnouncement(id: number) {
          this.ds.post("/announcements/delete", "", { id }).subscribe(
               () => {
                    this.announcements = this.announcements.filter((announcement: any) => announcement.id !== id)
                    this.filteredAnnouncements = this.filteredAnnouncements.filter((announcement: any) => announcement.id !== id)
                    Swal.fire({
                         title: "Success!",
                         text: "Announcement has been deleted.",
                         icon: "success",
                         confirmButtonText: "Close",
                         confirmButtonColor: "#777777",
                    })
               },
               (error) => {
                    Swal.fire({
                         title: "Error!",
                         text: "Something went wrong. Please try again later.",
                         icon: "error",
                         confirmButtonText: "Close",
                         confirmButtonColor: "#777777",
                    })
               }
          )
     }

     onArchiveBtnClick(id: number) {
          Swal.fire({
               title: "Delete Announcement?",
               text: "Are you sure you want to delete this announcement?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes",
               cancelButtonText: "Cancel",
               confirmButtonColor: "#AB0E0E",
               cancelButtonColor: "#777777",
          }).then((result) => {
               if (result.isConfirmed) {
                    this.deleteAnnouncement(id)
               }
          })
     }

     getPaginationSummary(): string {
          const totalPages = this.totalPages
          const currentPage = this.currentPage
          return `${currentPage} of ${totalPages}`
     }
}
