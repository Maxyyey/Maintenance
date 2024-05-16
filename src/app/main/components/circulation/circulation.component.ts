import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { PatronService } from '@app/services/patron.service';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.scss',
})
export class CirculationComponent implements OnInit{
  patrons: any = []

  constructor(
    private dialogRef : MatDialog,
    private patronService: PatronService) { }

  ngOnInit() { 
    this.getPatrons()
  }

  getPatrons() {
    this.patronService.getPatrons().subscribe(
      patrons => {
        this.patrons = patrons
      },
      error => {
        console.error(error)
      }
    )
  }

  onEditBtnClick(id:number){
    this.patronService.getPatron(id).subscribe(
      patron => {
        this.dialogRef.open(EditComponent, {
          data: patron
        });
      },
      error => {
        console.error(error)
      }

    )
  }
  

}
