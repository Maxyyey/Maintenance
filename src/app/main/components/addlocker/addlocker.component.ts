import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './components/user/user.component';
import { HistoryComponent } from './components/history/history.component';
import { EditUsersComponent } from './components/editusers/editusers.component';
import { ArchiveComponent } from './components/archives/archives.component';
import { LockerService } from '@app/services/locker.service';
import { error } from 'console';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-locker',
  templateUrl: './addlocker.component.html',
  styleUrls: ['./addlocker.component.scss'],
})
export class AddLockerComponent implements OnInit {

  lockers: any[] = [];
  isModalOpen: boolean = false
  currentPage = 1;
  itemsPerPage = 10;


  constructor(
    private dialogRef: MatDialog, 
    private lockerService: LockerService) { }

 ngOnInit() {
    this.getLockers();
  }
  get totalPages(): number {
    return Math.ceil(this.lockers.length / this.itemsPerPage);
  }

  paginatedLockers(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.lockers.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getLockers(): void {
    this.lockerService.getLockers().subscribe(
      (lockers) => {
      this.lockers = lockers;
      console.log(this.lockers)
    });
  }
  
  deleteLocker(id:number) {
  this.lockerService.deleteLocker(id).subscribe(
    result => {
      Swal.fire({
        title: "Deleting complete!",
        text: "locker has been deleted.",
        icon: "success",
        confirmButtonText: 'Close',
        confirmButtonColor: "#777777",
      });
      this.lockers.pop()  //remove the last element on success
    },
    error => {
      console.error(error)
      if(error.status == 400) {
        Swal.fire({
          title: "Error!",
          text: "You must delete the latest locker first.",
          icon: "error",
        })

      }
    }
  )

  }

  onHistoryBtnClick() {
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    this.lockerService.getHistory().subscribe(
      result => {
        let modal = this.dialogRef.open(HistoryComponent, {
          data: result
        })
        modal.afterClosed().subscribe(
          result => {  
           this.isModalOpen = false
          }
        )
      },
      error => {
        console.log(error)
      }
    )
  }

  onAddNewBtnClick() {
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    this.lockerService.getStartingLockerNumber().subscribe(
      data => {
        let modal = this.dialogRef.open(UserComponent, {
          data: data
        });
        modal.afterClosed().subscribe(
          result => {
            this.isModalOpen = false

            if(result != null) {
              result.success.forEach((locker: any) => {
                this.lockers.push(locker)
              });
            }
          }
        )
      }
    )
  }

  onEditBtnClick(id: number) {
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    this.lockerService.getLocker(id).subscribe(
      data => {
        let modal = this.dialogRef.open(EditUsersComponent, 
          { data: data }
        );

        modal.afterClosed().subscribe(
          result => {
            this.isModalOpen = false
            //update locker info
            if(result != null) {
              this.lockers = this.lockers.map(locker => {
                if (locker.id === result.success.id) {
                    return { ...locker, status: result.success.status };
                }
                return locker;
              });
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
      text: "Are you sure want to delete this locker?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteLocker(id)
      }
    });
}
}
