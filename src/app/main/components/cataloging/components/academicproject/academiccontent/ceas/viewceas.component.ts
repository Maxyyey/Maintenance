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
  selector: 'app-viewceas',
  templateUrl: './viewceas.component.html',
  styleUrl: './viewceas.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class ViewCeasComponent {

  constructor(private router: Router, private ref: MatDialogRef<ViewCeasComponent>, private buildr: FormBuilder,) {
}

closepopup() {
  this.ref.close('Closed using function');
}
}