import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent {
  showTable: boolean = false;

  toggleTable() {
    this.showTable = !this.showTable;
  }
}
