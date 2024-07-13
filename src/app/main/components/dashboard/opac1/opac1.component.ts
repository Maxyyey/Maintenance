import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-opac1',
  templateUrl: './opac1.component.html',
  styleUrl: './opac1.component.scss'
})
export class OPAC1Component {
  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    const ctx3 = document.getElementById('myBarChart') as HTMLCanvasElement;
    const myBarChart = new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Total Visits',
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
        plugins: {
          legend: {
            labels: {
              font: {
                size: 20 // Adjust the font size as needed
              },
              padding: 40 // Adjust the padding/margin around the labels
            }
          }
        }
      }
    });
  }

}
