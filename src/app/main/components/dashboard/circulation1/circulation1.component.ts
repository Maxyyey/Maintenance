import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Chart, registerables } from 'chart.js';
import { combineLatest } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-circulation1',
  templateUrl: './circulation1.component.html',
  styleUrls: ['./circulation1.component.scss']
})
export class Circulation1Component implements OnInit {
  availableBooks: any;
  unreturnedBooks: number = 0;
  missingBooks: any;
  totalBooksBorrowed: any; // Initialize with default value

  ngOnInit() {
    this.initializeChart();
    this.getAvailableBooks();
    this.getUnreturnedBooks();
    this.getMissingBooks();
    this.getTotalBooksBorrowed(); // Fetch total books borrowed
  }

  constructor(private dataService: DataService) {}

  getAvailableBooks() {
    this.dataService.get('/analytics/available-books').subscribe(
      data => {
        this.availableBooks = data.available_books;
      },
      error => {
        console.error(error);
      }
    );
  }

  getUnreturnedBooks() {
    this.dataService.get('/analytics/unreturned-books').subscribe(
      data => {
        this.unreturnedBooks = data.unreturned_books;
      },
      error => {
        console.error(error);
      }
    );
  }

  getMissingBooks() {
    this.dataService.get('/analytics/missing-books').subscribe(
      data => {
        this.missingBooks = data.missing_books;
      },
      error => {
        console.error(error);
      }
    );
  }

  getTotalBooksBorrowed() {
    this.dataService.get('/analytics/total-borrowed').subscribe(
      data => {
        this.totalBooksBorrowed = data.total_borrowed;
      },
      error => {
        console.error(error);
      }
    );
  }

  initializeChart() {
    // Assuming you have imported Chart and registerables at the top of your component

    // Get the canvas element for myPieChart
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;

    // Initialize Chart.js instance with doughnut type
    const myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // Labels for the chart segments
        labels: ['Available', 'Unreturned', 'Missing'],

        datasets: [{
          // Label for the dataset
          label: 'Total',

          // Initial data placeholders (you can update this later)
          data: [0, 0, 0],

          // Background colors for each segment
          backgroundColor: [
            '#1A4D2E',   // Available segment color
            '#FFC100',   // Unreturned segment color
            '#C40C0C',   // Missing segment color
          ],

          // Border colors for each segment
          borderColor: [
            '#1A4D2E',   // Available segment border color
            '#FFC100',   // Unreturned segment border color
            '#C40C0C',   // Missing segment border color
          ],

          // Border width for each segment
          borderWidth: 1
        }]
      },
      options: {
        // Chart responsiveness settings
        responsive: true,
        maintainAspectRatio: true,

        // Plugin options, e.g., for legend styling
        plugins: {
          legend: {
            labels: {
              font: {
                size: 15   // Adjust the legend font size as needed
              }
            }
          }
        }
      }
    });

    // Fetch data and update the chart once data is available
    combineLatest([
      this.dataService.get('/analytics/available-books'),
      this.dataService.get('/analytics/unreturned-books'),
      this.dataService.get('/analytics/missing-books')
    ]).subscribe(
      ([availableBooksData, unreturnedBooksData, missingBooksData]) => {
        // Update chart data
        myPieChart.data.datasets[0].data = [
          availableBooksData.available_books,
          unreturnedBooksData.unreturned_books,
          missingBooksData.missing_books
        ];

        // Update the chart
        myPieChart.update();
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  
  
  
    // Optionally, you can store the myPieChart instance if you need to update it dynamically
    // this.myPieChart = myPieChart;
  

    const ctx2 = document.getElementById('myLineChart') as HTMLCanvasElement;
    const myLineChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['CCS', 'CBA', 'CEAS', 'CAHS', 'CHTM'],
        datasets: [{
          // label: 'Monthly Sales',
          data: [50, 30, 60, 70, 40],
          backgroundColor: '#1A4D2E',
          borderColor: '#1A4D2E',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ctx3 = document.getElementById('myBarChart') as HTMLCanvasElement;
    const myBarChart = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Total Borrowed',
          data: [10, 12, 15, 18, 20, 22, 25],
          borderColor: '#1A4D2E',
          backgroundColor: '#1A4D2E',
          borderWidth: 1,
          barThickness: 40
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}