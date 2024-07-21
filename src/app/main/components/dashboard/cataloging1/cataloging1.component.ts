import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '@app/services/data.service';

Chart.register(...registerables);

interface materials {
  books: number,
  periodicals: number, 
  articles: number, 
  audiovisual: number,
  total: number
}

@Component({
  selector: 'app-cataloging1',
  templateUrl: './cataloging1.component.html',
  styleUrl: './cataloging1.component.scss'
})



export class Cataloging1Component {
  materials: materials = {
    books: 0,
    periodicals: 0,
    articles: 0,
    audiovisual: 0,
    total: 0
  }

  projects: any
  totalProjects: number = 0

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    this.getMaterials()
    this.getProjects()
  }

  getMaterials() {
    this.dataService.get('/analytics/total-materials').subscribe(
      materials => {
        materials.forEach((material: any) => {
          switch(material.material_type) {
            case 0:
                this.materials.books = material.total
                break
            case 1:
                this.materials.periodicals = material.total
                break
            case 2:
                this.materials.articles = material.total
                break
            case 3:
                this.materials.audiovisual = material.total
                break
          }
          this.materials.total += material.total
        });
        
        this.initializeMaterialsChart();
      },
      error => {

      }
    )
  }

  getProjects() {
    this.dataService.get('/analytics/total-projects').subscribe(
      project => {
        this.projects = project
        this.initializeProjectsChart()
      },
      error => {

      }
    )
  }

  initializeMaterialsChart() {
    const ctx2 = document.getElementById('myCataDoughnutChart') as HTMLCanvasElement;
    const myCataDoughnutChart = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Books', 'Article', 'Periodical', 'Audiovisual'],

        datasets: [{
          label: 'Total',
          data: [this.materials.books, this.materials.articles, this.materials.periodicals, this.materials.audiovisual],
          backgroundColor: [
            '#1A4D2E',
            '#FFC100',
            '#C40C0C',
            '#219C90',

          ],
          borderColor: [
            '#1A4D2E',
            '#FFC100',
            '#C40C0C',
            '#219C90',
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
                size: 12 // Adjust the font size as needed
              }
              

            }
          }
        }
      },
    });

  }
  initializeProjectsChart() {
    var departments: any = []
    var total: any = []

    this.projects.forEach((project:any) => {
      departments.push(project.department_short)
      total.push(project.total)
      this.totalProjects += project.total
    })

    const ctx = document.getElementById('myCataLineChart') as HTMLCanvasElement;
    const myCataLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: departments,
        datasets: [{
          label: 'Total Projects',
          data: total,
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
  }

}