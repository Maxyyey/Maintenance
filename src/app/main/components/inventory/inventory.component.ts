import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScanbarcodeComponent } from './scanbarcode/scanbarcode.component';
import { EnterbarcodeComponent } from './enterbarcode/enterbarcode.component';
import { ClearhistoryComponent } from './clearhistory/clearhistory.component';
import { InventoryService } from '@app/services/inventory.service';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: "Clear History",
      text: "Are you sure want to clear history?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      confirmButtonColor: "#AB0E0E",
      cancelButtonColor: "#777777",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Clearing complete!",
          text: "History has been cleared.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    });
}
}
