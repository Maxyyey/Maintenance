import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddiconComponent } from './addicon/addicon.component';

@Component({
  selector: 'app-materialscontent',
  templateUrl: './materialscontent.component.html',
  styleUrl: './materialscontent.component.scss'
})
export class MaterialscontentComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.dialogRef.open(AddiconComponent, {});
  }

  
}
