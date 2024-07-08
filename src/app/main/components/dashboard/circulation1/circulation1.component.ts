import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-circulation1',
  templateUrl: './circulation1.component.html',
  styleUrls: ['./circulation1.component.scss']
})
export class Circulation1Component implements OnInit {


  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;
    const myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Returned', 'Unreturned', 'Missing'], 
       
        datasets: [{
          label: 'Total',
          data: [79,20,1],
          backgroundColor: [
            'green',
            'orange',
            'red',

          ],
          borderColor: [
            'green',
            'orange',
            'red',
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
          backgroundColor: 'blue',
          borderColor: 'rgba(0, 0, 255, 0.5)',
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
          label: 'Temperature',
          data: [10, 12, 15, 18, 20, 22, 25],
          borderColor: 'green',
          backgroundColor: 'rgba(0, 128, 0, 0.2)',
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
