import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.scss',
})
export class CirculationComponent implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    this.router.navigate(['/upload']);
  }
  // Component logic here
}
