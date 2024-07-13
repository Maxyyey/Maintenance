import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-cataloging1',
  templateUrl: './cataloging1.component.html',
  styleUrl: './cataloging1.component.scss'
})
export class Cataloging1Component {
  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    const ctx = document.getElementById('myCataLineChart') as HTMLCanvasElement;
    const myCataLineChart = new Chart(ctx, {
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
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const ctx2 = document.getElementById('myCataDoughnutChart') as HTMLCanvasElement;
    const myCataDoughnutChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Books', 'Article', 'Periodical'],

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
        maintainAspectRatio: false,
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
  }

}
