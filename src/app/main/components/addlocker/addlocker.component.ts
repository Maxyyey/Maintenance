import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './components/user/user.component';
import { HistoryComponent } from './components/history/history.component';
import { EditUsersComponent } from './components/editusers/editusers.component';
import { ArchiveComponent } from './components/archives/archives.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-locker',
  templateUrl: './addlocker.component.html',
  styleUrl: './addlocker.component.scss',
})
export class AddLockerComponent implements OnInit{
  constructor(private dialogRef:MatDialog
  ) { }

  ngOnInit(): void { }

  onHistoryBtnClick(){
    this.dialogRef.open(HistoryComponent, {})
  }
  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(UserComponent, {});
    
  }
  onEditBtnClick(){
    this.dialogRef.open(EditUsersComponent,{});
  }
  // onArchiveBtnClick(){
  //   this.dialogRef.open(ArchiveComponent,{});
  // }

  onArchiveBtnClick(){
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
        Swal.fire({
          title: "Deleting complete!",
          text: "Project has been deleted.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    });
}
}
