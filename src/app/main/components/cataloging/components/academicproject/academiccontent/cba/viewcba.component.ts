import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


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
export class ViewCbaComponent implements OnInit{
  departmentName = 'CBA';
  programs: string[] = [];

  constructor(private router: Router, private ref: MatDialogRef<ViewCbaComponent>, private buildr: FormBuilder,
   private http: HttpClient 
  ){}

  ngOnInit(): void {
    // Fetch data from the backend API
    this.http.get<any>(`http://localhost:8000/api/view/${this.departmentName}`)
      .subscribe(response => {
        // Extract programs from the response
        this.programs = response.programs;
      }, error => {
        console.error('Error fetching programs:', error);
      });
  }

closepopup() {
  this.ref.close('Closed using function');
}
}