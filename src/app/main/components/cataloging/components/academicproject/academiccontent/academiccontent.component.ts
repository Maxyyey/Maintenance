import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProgramComponent } from './add-program/add-program.component';
import { ViewComponent } from './departmentModal/view.component';
import { DataService } from '@app/services/data.service';
import { AddDepartmentComponent } from './add-department/add-department.component';

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
    private dataService: DataService) { }

  ngOnInit() {
    this.getDepartments()
  }

  getDepartments() {
    this.dataService.get('/departments').subscribe(
      departments => {
        console.log(departments)
        this.departments = departments.departments_with_programs
        this.departmentsOnly = departments.departments_only
      },
      error => {
        console.error(error)
      }
    )
  }

  onAddCollegeClick() {
    if (this.isModalOpen) {
      return
    }

    this.isModalOpen = true

    let modal = this.dialogRef.open(AddDepartmentComponent, {});
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false

        if (result) {
          this.departments.push(result.department)
        }
      }
    )
  }

  addPrograms(department: any) {
    if (this.isModalOpen) {
      return
    }

    let modal = this.dialogRef.open(AddProgramComponent, {
      data: department
    });
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false
        if (result.data) {
          // console.log(result.data)
          const data = result.data
          let program = {
            program_short: data.program_short,
            program_full: data.program_full,
            department_full: data.department_full,
            department_short: data.department_short
          }
          this.departments[data.department_full].push(program)
        }
      }
    )
  }

  openDepartment(department: any) {
    if (this.isModalOpen) {
      return
    }

    this.isModalOpen = true
    console.log(department)

    let modal = this.dialogRef.open(ViewComponent, {
      data: department
    })
    modal.afterClosed().subscribe(
      result => this.isModalOpen = false
    )
  }
}
