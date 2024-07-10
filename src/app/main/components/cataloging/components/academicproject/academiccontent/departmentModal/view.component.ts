import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class ViewComponent implements OnInit {

  department: any = []; // Array to store programs
  programs: any = []

  constructor(
    private ref: MatDialogRef<ViewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(){
    this.department = this.data.key
    this.programs = this.data.value
  }

  closepopup() {
    this.ref.close('Closed using function');
  }
}
