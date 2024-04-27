import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {AddLockerRoutingModule } from './addlocker-routing.module'; // Import the routing module
import { Component, OnInit } from '@angular/core';
import { HistoryComponent } from './components/history/history.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    HistoryComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    AddLockerRoutingModule,
  ],
  // Other configurations...
})
export class AddLockerModule implements OnInit{
  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void { }

  onHistoryBtnClick(){
    this.dialogRef.open(HistoryComponent, {})
  }
  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(UserComponent, {});
    
  }
  // Component logic here
}

