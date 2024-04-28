import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edituser/edituser.component';
import { ArchiveComponent } from './archive/archive.component';

@Component({
  selector: 'app-personnelsetup',
  templateUrl: './personnelsetup.component.html',
  styleUrl: './personnelsetup.component.scss',
})
export class PersonnelSetupComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(AddUserComponent, {});
  }
  onEditBtnClick(){
    this.dialogRef.open(EditUserComponent,{});
  }
  onArchiveBtnClick(){
    this.dialogRef.open(ArchiveComponent,{});
  }
  // Component logic here
}
