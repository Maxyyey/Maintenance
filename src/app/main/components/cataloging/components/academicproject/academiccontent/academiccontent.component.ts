import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddiconacadComponent } from './addiconacad/addiconacad.component';
import { ViewComponent } from './departmentModal/view.component';
import { AddPopupComponent } from './addpopup/addpopup.component';
import { CatalogingService } from '@app/services/cataloging.service';
import { error } from 'console';
@Component({
  selector: 'app-academiccontent',
  templateUrl: './academiccontent.component.html',
  styleUrl: './academiccontent.component.scss',
})
export class AcademiccontentComponent implements OnInit {
  departments: any[] = []

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
    let modal = this.dialogRef.open(AddPopupComponent, {});
    modal.afterClosed().subscribe(
      result => {
        if(result) {
          this.departments.push(result.department)
        }
      }
    )
  }

  onAddNewBtnClick(){
    this.catalogingService.getDepartments().subscribe(
      departments => {  //temporary lang angbagal neto
        this.dialogRef.open(AddiconacadComponent, {
          data: departments
        });
      },
      error => {
        console.error(error)
      }
    )
  }

  openDepartment(id: number){
    console.log(id)
    this.catalogingService.getPrograms(id).subscribe(
      department => {
        this.dialogRef.open(ViewComponent, {
          data: department
        })
      },
      error => {
        console.error(error)
      }
    )
  }


  // Other component logic goes here
}
