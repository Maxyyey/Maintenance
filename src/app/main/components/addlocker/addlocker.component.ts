import { Component, OnInit } from "@angular/core"
import { MatDialog } from "@angular/material/dialog"
import { UserComponent } from "./components/user/user.component"
import { EditUsersComponent } from "./components/editusers/editusers.component"
import { LockerService } from "@app/services/locker.service"
import Swal from "sweetalert2"
import { DataService } from "@app/services/data.service"

@Component({
     selector: "app-add-locker",
     templateUrl: "./addlocker.component.html",
     styleUrls: ["./addlocker.component.scss"],
})
export class AddLockerComponent implements OnInit {
     lockers: any[] = []
     filteredLocker: any = []
     isModalOpen: boolean = false
     currentPage = 1
     itemsPerPage = 10
     isLoading = true

     constructor(private dialogRef: MatDialog, private lockerService: LockerService, private ds: DataService) {}

     ngOnInit() {
          this.getLockers()
     }
     get totalPages(): number {
          return Math.ceil(this.filteredLocker.length / this.itemsPerPage)
     }

     paginatedLockers(): any[] {
          const startIndex = (this.currentPage - 1) * this.itemsPerPage
          const endIndex = startIndex + this.itemsPerPage
          return this.filteredLocker.slice(startIndex, endIndex)
     }

     search(value: string) {
          const searchTerm = value.toLowerCase()
          this.filteredLocker = this.lockers.filter((locker: any) => {
               return parseInt(locker.locker_number).toString().includes(searchTerm) || locker.status.toLowerCase().includes(searchTerm)
          })
          this.currentPage = 1 // Reset to first page after search
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

     getLockers(): void {
          this.isLoading = true
          this.lockerService.getLockers().subscribe((lockers) => {
               this.lockers = lockers
               this.filteredLocker = lockers
               console.log(this.lockers)
               this.isLoading = false
          })
     }

     deleteLocker(id: number) {
          this.ds.post("/maintenance/lockers/delete", "", { id }).subscribe(
               (result) => {
                    Swal.fire({
                         title: "Deleting complete!",
                         text: "locker has been deleted.",
                         icon: "success",
                         confirmButtonText: "Close",
                         confirmButtonColor: "#777777",
                    })
                    this.lockers.pop() //remove the last element on success
               },
               (error) => {
                    console.error(error)
                    if (error.status == 400) {
                         Swal.fire({
                              title: "Error!",
                              text: "You must delete the latest locker first.",
                              icon: "error",
                         })
                    } else {
                         Swal.fire({
                              title: "error!",
                              text: "Something went wrong, please try again later.",
                              icon: "error",
                         })
                    }
               }
          )
     }

     onAddNewBtnClick() {
          if (this.isModalOpen) {
               return
          }

          this.isModalOpen = true

          this.lockerService.getStartingLockerNumber().subscribe(
               (data) => {
                    let modal = this.dialogRef.open(UserComponent, {
                         data: data,
                    })
                    modal.afterClosed().subscribe((result) => {
                         this.isModalOpen = false

                         if (result != null) {
                              result.success.forEach((locker: any) => {
                                   this.lockers.push(locker)
                              })
                         }
                    })
               },
               (error) => {
                    console.error(error)
                    this.isModalOpen = false
                    Swal.fire({
                         title: "error!",
                         text: "Something went wrong, please try again later.",
                         icon: "error",
                    })
               }
          )
     }

     onEditBtnClick(id: number) {
          if (this.isModalOpen) {
               return
          }

          this.isModalOpen = true

          this.lockerService.getLocker(id).subscribe(
               (data) => {
                    let modal = this.dialogRef.open(EditUsersComponent, { data: data })

                    modal.afterClosed().subscribe((result) => {
                         this.isModalOpen = false
                         //update locker info
                         if (result != null) {
                              this.lockers = this.lockers.map((locker) => {
                                   if (locker.id === result.success.id) {
                                        return { ...locker, status: result.success.status }
                                   }
                                   return locker
                              })
                         }
                    })
               },
               (error) => {
                    console.error(error)
                    this.isModalOpen = false
                    Swal.fire({
                         title: "Error!",
                         text: "Something went wrong. Please try again later",
                         icon: "error",
                    })
               }
          )
     }

     onArchiveBtnClick(id: number) {
          Swal.fire({
               title: "Delete Locker",
               text: "Are you sure want to delete this locker?",
               icon: "warning",
               showCancelButton: true,
               confirmButtonText: "Yes",
               cancelButtonText: "Cancel",
               confirmButtonColor: "#AB0E0E",
               cancelButtonColor: "#777777",
          }).then((result) => {
               if (result.isConfirmed) {
                    this.deleteLocker(id)
               }
          })
     }
     getPaginationSummary(): string {
          const totalPages = this.totalPages
          const currentPage = this.currentPage
          return `${currentPage} of ${totalPages}`
     }
}
