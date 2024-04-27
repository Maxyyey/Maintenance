import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from './components/user/user.component';
import { HistoryComponent } from './components/history/history.component';

@Component({
  selector: 'app-add-locker',
  templateUrl: './addlocker.component.html',
  styleUrl: './addlocker.component.scss',
})
export class AddLockerComponent implements OnInit{
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
