import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '@app/services/data.service';
import { combineLatest } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-locker1',
  templateUrl: './locker1.component.html',
  styleUrls: ['./locker1.component.scss']
})
export class Locker1Component implements OnInit {
  totalLockers: number = 0;
  totalUsers: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.initializeChart();
    this.getTotalLockers();
    this.getTotalUsers();
  }

  getTotalLockers() {
    this.dataService.get('/analytics/total-lockers').subscribe(
      (data) => {
        this.totalLockers = data.total_lockers;
        console.log('Total lockers:', this.totalLockers);
      },
      (error) => {
        console.error('Error fetching total lockers:', error);
      }
    );
  }

  getTotalUsers() {
    this.dataService.get('/analytics/total-active-users').subscribe(
      (data) => {
        this.totalUsers = data.total_users;
        console.log('Total users:', this.totalUsers);
      },
      (error) => {
        console.error('Error fetching total users:', error);
      }
    );
  }

  initializeChart() {
    const ctx = document.getElementById('myLockerChart') as HTMLCanvasElement;
    const myLockerChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['CHTM', 'CCS', 'CEAS', 'CBA', 'CAHS'],
        datasets: [{
          label: 'Total',
          data: [79, 20, 32, 40, 40],
          backgroundColor: ['#1A4D2E'],
          borderColor: ['#1A4D2E'],
          borderWidth: 5,
          barThickness: 80
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 20 // Adjust the font size as needed
              }
            }
          }
        }
      }
    });
  }
}
