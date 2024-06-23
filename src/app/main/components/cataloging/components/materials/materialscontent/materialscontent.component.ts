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
  isModalOpen: boolean = false

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
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    let modal = this.dialogRef.open(AddiconComponent, {});
    modal.afterClosed().subscribe(
      result => {
        this.isModalOpen = false
        
        if(result) {
          this.locations.unshift(result.success)
        }
      }
    )
  }
  onhistorylogsBtnClick() {
    if(this.isModalOpen) {
      return
    }
    
    this.isModalOpen = true

    
  }
  
}
