import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface MyOption {
  value: string;
  label: string;
}
@Component({
  selector: 'app-viewcba',
  templateUrl: './viewcba.component.html',
  styleUrl: './viewcba.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class ViewCbaComponent {

  constructor(private router: Router, private ref: MatDialogRef<ViewCbaComponent>, private buildr: FormBuilder,) {
}

closepopup() {
  this.ref.close('Closed using function');
}
}