import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  lockerLogs: any[] = []
  // currentPage = 1;
  // itemsPerPage = 5;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<HistoryComponent>) {
  }

  async ngOnInit(): Promise<void> {
    this.lockerLogs = this.data
    console.log(this.lockerLogs)
    // this.lockers = await this.lockerService.getLockers();
  }

  // get totalPages(): number {
  //   return Math.ceil(this.lockers.users.length / this.itemsPerPage);
  // }

  // paginatedLockers(): any[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   return this.lockers.users.slice(startIndex, endIndex);
  // }

  // previousPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }
  closepopup() {
    this.ref.close('Closed using function');
  }
}
