import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-locker',
  templateUrl: './addlocker.component.html',
  styleUrl: './addlocker.component.scss',
})
export class AddLockerComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void { }

  onHistoryBtnClick(){
    this.router.navigate(['/history']);
  }
  onAddNewBtnClick(){
    this.router.navigate(['/user']);
  }
  // Component logic here
}
