import { Component, OnInit } from '@angular/core';
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
  departments: any = []
  departmentsOnly: any = []
  isModalOpen: boolean = false

  constructor(
    private dialogRef: MatDialog, 
    private catalogingService: CatalogingService) { }

  ngOnInit(){
    this.getDepartmentsPrograms()
    this.getDepartmentsOnly()
  }

  getDepartmentsPrograms() {
    this.catalogingService.getDepartments().subscribe(
      departments => {
        this.departments = (Object.entries(departments))
          console.log((Object.entries(departments)))
      },
      error => {
        console.error(error)
      }
    )
  }

  getDepartmentsOnly() {
    this.catalogingService.getDepartmentsOnly().subscribe(
      departments => {
        this.departmentsOnly = departments
        console.log(departments)
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

  addPrograms(department: any){
    if(this.isModalOpen) {
      return
    }
    
    let modal = this.dialogRef.open(AddiconacadComponent, {
      data: department
    }); 
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false
      }
    )
  }

  openDepartment(department: any){
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    let modal = this.dialogRef.open(ViewComponent, {
      data: department
    })
    modal.afterClosed().subscribe(
      result => this.isModalOpen = false
    )
  }
}
