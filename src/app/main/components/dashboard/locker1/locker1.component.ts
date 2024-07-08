import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-locker1',
  templateUrl: './locker1.component.html',
  styleUrl: './locker1.component.scss'
})
export class Locker1Component {
  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    const ctx = document.getElementById('myLockerChart') as HTMLCanvasElement;
    const myLockerChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['CHTM', 'CCS', 'CEAS', 'CBA', 'CAHS'], 
       
        datasets: [{
          label: 'Total',
          data: [79,20, 32, 40, 40],

          backgroundColor: [
            'pink',
            'orange',
            'blue',
            'yellow',
            'red',

          ],
          borderColor: [
            'pink',
            'orange',
            'blue',
            'yellow',
            'red',
          ],
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
              },
              
            }
          }
        }
      },
    });
  }
}
