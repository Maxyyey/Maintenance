import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edituser/edituser.component';
import { ArchivessComponent } from './archivess/archivess.component';
import { PersonnelService } from '@app/services/personnel.service';
import { response } from 'express';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personnelsetup',
  templateUrl: './personnelsetup.component.html',
  styleUrl: './personnelsetup.component.scss',
})
export class PersonnelSetupComponent implements OnInit{
  public personnels: any = [];
  constructor(private dialogRef : MatDialog, private personnelService: PersonnelService) { }

  async ngOnInit(): Promise<void> {
    this.personnels = await this.personnelService.getPersonnels()
   }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(AddUserComponent, {});
  }
  onEditBtnClick(id: number){
    console.log(id)
    this.personnelService.getPersonnel(id).subscribe(
      personnel => {
        this.dialogRef.open(EditUserComponent,{
          data: personnel
        });
        console.log(personnel)
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
  // Component logic here


}

//up