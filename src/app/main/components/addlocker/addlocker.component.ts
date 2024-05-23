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
  lockerData = {
    locker_number: '',
    name: '',
    student_number: '',
    college_program: '',
    college_department: '',
    user_id: '',
    gender: '',
    status: '',
  };

  constructor(
    private dialogRef: MatDialog, 
    private lockerService: LockerService) { }

  ngOnInit(): void {
    this.getLockers();
  }

  getLockers(): void {
    this.lockerService.getLockers().subscribe(
      (lockers) => {
      this.lockers = lockers;
      console.log(this.lockers)
    });
  }
  
  deleteLocker(id:number) {
    console.log(id)
  this.lockerService.deleteLocker(id).subscribe(
    result => {
      Swal.fire({
        title: "Deleting complete!",
        text: "locker has been deleted.",
        icon: "success",
        confirmButtonText: 'Close',
        confirmButtonColor: "#777777",
      });
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
    this.lockerService.getLockers().subscribe(
      (response) => {
        this.lockers = response;
      },
      (error) => {
        console.error('Error retrieving lockers:', error);
        // Handle error here
      }
    );
  }

  onAddNewBtnClick() {
    this.lockerService.getStartingLockerNumber().subscribe(
      data => {
        this.dialogRef.open(UserComponent, {
          data: data
        });
      }
    )
  }

  onEditBtnClick(id: number) {
    this.lockerService.getLocker(id).subscribe(
      data => {
        console.log(data)
        this.dialogRef.open(EditUsersComponent, 
          { data: data }
        );
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
