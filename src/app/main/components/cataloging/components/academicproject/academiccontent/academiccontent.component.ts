import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddiconacadComponent } from './addiconacad/addiconacad.component';
import { ViewComponent } from './departmentModal/view.component';
import { AddPopupComponent } from './addpopup/addpopup.component';
import { CatalogingService } from '@app/services/cataloging.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-academiccontent',
  templateUrl: './academiccontent.component.html',
  styleUrl: './academiccontent.component.scss',
})
export class AcademiccontentComponent implements OnInit {
  departments: any[] = []
  isModalOpen: boolean = false

  constructor(
    private dialogRef: MatDialog, 
    private catalogingService: CatalogingService) { }

  ngOnInit(){
    this.getDepartments()
  }

  getDepartments() {
    this.catalogingService.getDepartments().subscribe(
      departments => {
        this.departments = departments
        console.log(this.departments)
      },
      error => {
        console.error(error)
      }
    )
  }

  onAddCollegeClick() {
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    let modal = this.dialogRef.open(AddPopupComponent, {});
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false

        if(result) {
          this.departments.push(result.department)
        }
      }
    )
  }

  onAddNewBtnClick(){
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    this.catalogingService.getDepartments().subscribe(
      departments => {  //temporary lang angbagal neto
        let modal = this.dialogRef.open(AddiconacadComponent, {
          data: departments
        });
        modal.afterClosed().subscribe(
          result => {
            this.isModalOpen = false
          }
        )
      },
      error => {
        console.error(error)
        this.isModalOpen = false
        Swal.fire({
          title: "error!",
          text: "Something went wrong, please try again later.",
          icon: "error",
        });
      }
    )
  }

  openDepartment(id: number){
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true
    
    console.log(id)
    this.catalogingService.getPrograms(id).subscribe(
      department => {
        let modal = this.dialogRef.open(ViewComponent, {
          data: department
        })
        modal.afterClosed().subscribe(
          result => {   
            this.isModalOpen = false
          }
        )
      },
      error => {
        console.error(error)
        this.isModalOpen = false
        Swal.fire({
          title: "error!",
          text: "Something went wrong, please try again later.",
          icon: "error",
        });
      }
    )
  }
}
