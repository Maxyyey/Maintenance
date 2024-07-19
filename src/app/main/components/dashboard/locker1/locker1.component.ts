import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { DataService } from '@app/services/data.service';
import { combineLatest } from 'rxjs';

Chart.register(...registerables);

export interface lockers {
  available: number, 
  unavailable: number, 
  occupied: number, 
  total: number
}

@Component({
  selector: 'app-locker1',
  templateUrl: './locker1.component.html',
  styleUrls: ['./locker1.component.scss']
})
export class Locker1Component implements OnInit {
  lockers: lockers = {
    available: 0, 
    unavailable: 0, 
    occupied: 0, 
    total: 0
  }

  totalUsers: number = 0;

  dateFilter: number = 0
  rawUserByDept: any = {}
  userByDept: any = {}

  chartInstance: Chart | null = null

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTotalLockers();
    this.initializeChart()
    // this.getTotalUsers();
    this.getTotalUsersByDepartment()
  }

  onFilterChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.dateFilter = parseInt(element.value);
    this.filterUserByDepartment()
  }

  getTotalUsersByDepartment() {
    this.dataService.get('/analytics/locker-user-by-department').subscribe(
      data => {
        this.rawUserByDept = data 
        this.filterUserByDepartment()
      },
      error => {
        console.error(error);
      }
    )
  }

  filterUserByDepartment() {
    var data = this.rawUserByDept

    data = this.filterByDate(data)
    data = this.countUserByDept(data)

    this.updateChart(data)
  } 

  filterByDate(data: any) {
    var date = new Date();

    var today = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }

    //time sucks.....
    //0 - today, 1 - weekly, 2 - monthly
    switch(this.dateFilter) {
      case 0:
        data = data.filter((data: any) => {
          var date = new Date(data.time_in)
          return date.getFullYear() === today.year && 
                date.getMonth() === today.month &&
                date.getDate() === today.day
        })
        break
      case 1:
        let oneWeekBefore = new Date().getTime() - 604800000 //one week
        data = data.filter((data: any) => {
          var date = new Date(data.time_in)
          return date.getTime() > oneWeekBefore
        })
        break
      case 2:
        data = data.filter((data: any) => {
          var date = new Date(data.time_in)
          return date.getMonth() === today.month &&
                date.getFullYear() === today.year
        } )
        break
    }

    return data
  }

  countUserByDept(data: any) {
    let count:any = {}
    this.totalUsers = 0

    data.forEach((user:any) => {
      if (!count[user.department_short]) {
        count[user.department_short] = 0; 
      }
      count[user.department_short] += 1;
      this.totalUsers += 1
    });
    
    return count
  }

  updateChart(data: any) {
    if(!this.chartInstance) { 
      return
    }

    var departments: any = Object.keys(data)
    var total: any = Object.values(data)

    if(departments.length === 0) {
      //a placeholder per se`
      departments = ['CHTM', 'CCS', 'CEAS', 'CBA', 'CAHS']
      total = [0, 0, 0, 0, 0]
    } 
    
    this.chartInstance.data.labels = departments;
    this.chartInstance.data.datasets[0].data = total
    console.log(this.chartInstance)
    
    this.chartInstance.update()
  }
  
  getTotalLockers() {
    this.dataService.get('/analytics/total-lockers').subscribe(
      data => {
        data.forEach((locker: any) => {
          switch(locker.status) {
            case 'Available':
                this.lockers.available = locker.total
                break
            case 'Unavailable':
                this.lockers.unavailable = locker.total
                break
            case 'Occupied':
                this.lockers.occupied = locker.total
                break
          }
          this.lockers.total += locker.total
        });
      },
      error => {
        console.error('Error fetching total lockers:', error);
      }
    );
  }

  initializeChart() {
    const ctx = document.getElementById('myLockerChart') as HTMLCanvasElement;

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['CHTM', 'CCS', 'CEAS', 'CBA', 'CAHS'],
        datasets: [{
          label: 'Total',
          data: [0, 0, 0, 0, 0],
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
