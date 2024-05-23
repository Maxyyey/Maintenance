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

  constructor(private dialogRef: MatDialog, private lockerService: LockerService) { }

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

  // onSubmit() {
  //   this.lockerService.addLocker(this.lockerData).subscribe(
  //     (response) => {
  //       console.log('Locker added successfully:', response);
  //       // Handle successful response here
  //     },
  //     (error) => {
  //       console.error('Error adding locker:', error);
  //       // Handle error here
  //     }
  //   );
  // }

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

  onArchiveBtnClick(locker: any) {
    this.dialogRef.open(ArchiveComponent, { data: locker });
  }
}
