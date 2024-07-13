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
  availableBooks: number = 0
  unreturnedBooks: number = 0
  MissingBooks: any;

  ngOnInit() {
    this.initializeChart();
    this.getAvailableBooks()
    this.getUnreturnedBooks()
    this.getMissingBooks()
  }

  constructor(
    private dataService: DataService) {
  }

  getAvailableBooks() {
    this.dataService.get('/analytics/available-books').subscribe(
      data => {
        this.availableBooks = data.available_books
      },
      error => {
        console.error(error)
      }
    )
  }

  getUnreturnedBooks(){
    this.dataService.get('/analytics/unreturned-books').subscribe(
      data => {
        this.unreturnedBooks = data.unreturned_books
      },
      error => {
        console.error(error)
      }
    )
  }

  getMissingBooks(){
    this.dataService.get('/analytics/missing-books').subscribe(
      data => {
        this.MissingBooks = data.missing_books
      },
      error => {
        console.error(error)
      }
    )
  }
  initializeChart() {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    const myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Returned', 'Unreturned', 'Missing'],

        datasets: [{
          label: 'Total',
          data: [79, 20, 1],
          backgroundColor: [
            '#1A4D2E',
            '#FFC100',
            '#C40C0C',

          ],
          borderColor: [
            '#1A4D2E',
            '#FFC100',
            '#C40C0C',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 15 // Adjust the font size as needed
              }

            }
          }
        }
      },
    });

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
