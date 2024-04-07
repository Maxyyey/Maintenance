import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnelsetup',
  templateUrl: './personnelsetup.component.html',
  styleUrl: './personnelsetup.component.scss',
})
export class PersonnelSetupComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.router.navigate(['/adduser']);
  }
  // Component logic here
}
