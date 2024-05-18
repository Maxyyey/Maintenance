import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddiconComponent } from './addicon/addicon.component';
import { CatalogingService } from '@app/services/cataloging.service';
import { error } from 'console';

@Component({
  selector: 'app-materialscontent',
  templateUrl: './materialscontent.component.html',
  styleUrl: './materialscontent.component.scss'
})
export class MaterialscontentComponent implements OnInit{
  locations: any = []

  constructor(
    private dialogRef : MatDialog,
    private catalogingService: CatalogingService) { }

  ngOnInit(){
    this.getLocations()
  }

  getLocations() {
    this.catalogingService.getLocations().subscribe(
      locations => {
        this.locations = locations
      },
      error => {
        console.error(error)
      }
    )
  }
  onAddNewBtnClick(){
    this.dialogRef.open(AddiconComponent, {});
  }

  
}
