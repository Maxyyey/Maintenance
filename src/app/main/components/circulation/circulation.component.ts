import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';


@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.scss',
})
export class CirculationComponent implements OnInit{
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

 
  onEditBtnClick(){
    this.dialogRef.open(EditComponent, {});
    }
  

}
