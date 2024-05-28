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
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventories: any = [];
  filter: string = 'available'
  currentPage = 1;
  itemsPerPage = 10;
  search: string = ''
  default: boolean = true; //dont mind this

  constructor(
    private dialogRef: MatDialog,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.getInventories();
    // this.inventories = await this.inventoryService.getInventories();
  }

  get totalPages(): number {
    return Math.ceil(this.inventories.length / this.itemsPerPage);
  }

  paginatedInventories(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.inventories.slice(startIndex, endIndex);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  onSearch(){
    let search = this.search.trim()
    this.inventoryService.searchBookInventories(this.filter, search).subscribe(
      inventories => {
        this.inventories = inventories
        this.default = false
      },
      error => {
        console.error(error)
      }
    )
  }

  checkSearchInput() {
    if(this.search.trim().length > 0 || this.default) {
      return
    }
    this.default = true
    this.getInventories()
  }

  onFilterChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.filter = element.value;
    this.getInventories()
    this.currentPage = 1
    console.log('changing...')
  }

  onStatusChange(event: Event, id:number) {
    const element = event.target as HTMLSelectElement;
    let form = { status: element.value }
    
    this.inventoryService.updateBookInventoryStatus(form, id).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          title: 'Update Successful',
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
            icon: 'sweetalert-custom-icon-success'
          },
          background: '#ffffff',
        });
      },
      error => {
        console.log(error)
        Swal.fire({
          title: 'Something went wrong. please try again later',
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          customClass: {
            popup: 'sweetalert-custom-popup',
            title: 'sweetalert-custom-title',
            icon: 'sweetalert-custom-icon-success'
          },
          background: '#ffffff',
        });
      }
    )
  }

  getInventories() {
    this.inventoryService.getBookInventories(this.filter).subscribe(
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

  clearInventoryStatus() {
    this.inventoryService.clearBookInventoryStatus().subscribe(
      result => {
        Swal.fire({
          title: "Clearing complete!",
          text: "History has been cleared.",
          icon: "success",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
        this.getInventories()
      },
      error => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later",
          icon: "error",
          confirmButtonText: 'Close',
          confirmButtonColor: "#777777",
        });
      }
    )
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
        this.clearInventoryStatus()
      }
    });
}
}
