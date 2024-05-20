import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScanbarcodeComponent } from './scanbarcode/scanbarcode.component';
import { EnterbarcodeComponent } from './enterbarcode/enterbarcode.component';
import { ClearhistoryComponent } from './clearhistory/clearhistory.component';
import { InventoryService } from '@app/services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inventories: any = [];

  constructor(
    private dialogRef: MatDialog,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.getInventories();
  }

  getInventories() {
    this.inventoryService.getInventories().subscribe(
      inventories => {
        this.inventories = inventories || [];
        console.log(this.inventories);
      },
      error => {
        console.error(error);
      }
    );
  }

  onAddNewBtnClick() {
    this.dialogRef.open(ScanbarcodeComponent, {});
  }

  onAddNewBtnClick1() {
    this.dialogRef.open(EnterbarcodeComponent, {});
  }

  onClrHistoryBtnClick() {
    this.dialogRef.open(ClearhistoryComponent, {});
  }
}
