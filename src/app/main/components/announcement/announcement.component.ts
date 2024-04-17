import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewPopupComponent } from './components/addnew-popup/addnew-popup.component'; // Adjust the path as needed

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent {
  constructor(private dialog: MatDialog) {}

  openAddNewPopup() {
    this.dialog.open(AddNewPopupComponent, {
      width: '400px',
      // other configuration options...
    });
  }
}
