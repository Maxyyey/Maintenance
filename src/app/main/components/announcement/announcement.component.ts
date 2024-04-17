import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss',
})
export class AnnouncementComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.router.navigate(['/add']);
  }

  showTable: boolean = false;

  toggleTable() {
    this.showTable = !this.showTable;
  }
}
