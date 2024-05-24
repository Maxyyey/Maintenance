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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private ref: MatDialogRef<HistoryComponent>) {
  }

  ngOnInit() {
    this.lockerLogs = this.data
    console.log(this.lockerLogs)
  }

  closepopup() {
    this.ref.close('Closed using function');
  }
}
