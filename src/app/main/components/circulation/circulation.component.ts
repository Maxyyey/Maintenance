import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { PatronService } from '@app/services/patron.service';
import { response } from 'express';
import Swal from 'sweetalert2';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.scss',
})
export class CirculationComponent implements OnInit {
  [x: string]: any;
  currentPage = 1;
  itemsPerPage = 10;
  patrons: any = []
  isModalOpen: boolean = false

  constructor(
    private dialogRef: MatDialog,
    private patronService: PatronService) { }

  ngOnInit() {
    this.getPatrons()
  }

  getPatrons() {
    this.patronService.getPatrons().subscribe(
      patrons => {
        console.log(patrons)
        this.patrons = patrons
        this.patrons.forEach((patron: any) => {
          patron.days_allowed = Math.floor(patron.hours_allowed / 24)
          patron.hours_allowed = patron.hours_allowed % 24
        });
      },
      error => {
        console.error(error)
      }
    )
  }
  get totalPages(): number {
    return Math.ceil(this.patrons.length / this.itemsPerPage);
  }

  paginatedPersonnels(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.patrons.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  onEditBtnClick(id: number) {
    if (this.isModalOpen) {
      return
    }

    this.isModalOpen = true

    this.patronService.getPatron(id).subscribe(
      patron => {
        let modal = this.dialogRef.open(EditComponent, {
          data: patron
        });

        modal.afterClosed().subscribe(
          response => {
            this.isModalOpen = false

            if (response) {
              this.getPatrons()
              console.log('updating')
            }
          }
        )
      },
      error => {
        console.error(error)
        this.isModalOpen = false
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }

    )
  }

  onhistorylogsBtnClick() {
    if (this.isModalOpen) {
      return
    }

    this.isModalOpen = true

    let modal = this.dialogRef.open(HistoryComponent, {});
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false

        if (result) {
          this['circulation'].push(result.success)
        }
      }
    )
  }
}
