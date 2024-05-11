import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddiconacadComponent } from './addiconacad/addiconacad.component';

@Component({
  selector: 'app-academiccontent',
  templateUrl: './academiccontent.component.html',
  styleUrl: './academiccontent.component.scss'
})
export class AcademiccontentComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.dialogRef.open(AddiconacadComponent, {});
  }
  
  
  
}
