import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edituser/edituser.component';
import { ArchivessComponent } from './archivess/archivess.component';
import { PersonnelService } from '@app/services/personnel.service';

@Component({
  selector: 'app-personnelsetup',
  templateUrl: './personnelsetup.component.html',
  styleUrl: './personnelsetup.component.scss',
})

export class PersonnelSetupComponent implements OnInit{
  personnels: any[] = [] 

  constructor(
    private dialogRef : MatDialog,
    private personnelService: PersonnelService) { }

  ngOnInit() {
    this.getPersonnels()
  } 

  getPersonnels() {
    this.personnelService.getPersonnels().subscribe(
      personnels => {
        this.personnels = personnels.users
        console.log(this.personnels)
      },
      error => {
        console.error(error)
      }
    ) 
  }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(AddUserComponent, {});
  }
  onEditBtnClick(){
    this.dialogRef.open(EditUserComponent,{});
  }
  onArchiveBtnClick(){
    this.dialogRef.open(ArchivessComponent,{});
  }
  // Component logic here

  
}
