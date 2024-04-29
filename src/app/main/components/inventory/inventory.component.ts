import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScanbarcodeComponent } from './scanbarcode/scanbarcode.component';
import { EnterbarcodeComponent } from './enterbarcode/enterbarcode.component';
import { ClearhistoryComponent } from './clearhistory/clearhistory.component';




@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit{ 
  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick() {
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(ScanbarcodeComponent, {});
    
  }
  onAddNewBtnClick1() {
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(EnterbarcodeComponent, {});
  }
  onClrHistoryBtnClick() {
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(ClearhistoryComponent, {});
}
}