import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewceas',
  templateUrl: './viewceas.component.html',
  styleUrls: ['./viewceas.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
})
export class ViewCeasComponent implements OnInit {

  departmentName = 'CEAS'; // Set the department name
  programs: string[] = []; // Array to store programs

  constructor(
    private router: Router, 
    private ref: MatDialogRef<ViewCeasComponent>, 
    private buildr: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Fetch data from the backend API
    this.http.get<any>(`http://localhost:8000/api/view/${this.departmentName}`)
      .subscribe(response => {
        console.log('API Response:', response); // Debugging line
        // Extract programs from the response
        if (response && response.programs) {
          this.programs = response.programs;
        }
      }, error => {
        console.error('Error fetching programs:', error);
      });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }
}
