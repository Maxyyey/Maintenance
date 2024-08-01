import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/services/data.service';
import { Chart, registerables } from 'chart.js';
import { combineLatest, first } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-circulation1',
  templateUrl: './circulation1.component.html',
  styleUrls: ['./circulation1.component.scss']
})
export class Circulation1Component implements OnInit {
  availableBooks: number = 0;
  unreturnedBooks: number = 0;
  missingBooks: number = 0;
  totalBorrowedBooks: number = 0; 
  topBorrowers: any

  borrowHistory: any

  pieChartInstance: any;
  departmentChartInstance: any;
  topBorrowedBooksChart: any;

  dateFilter: number = 0

  ngOnInit() {
    this.initializeChart();
    this.getBorrowHistory()
    this.getAvailableBooks();
    this.getUnreturnedBooks();
    // this.getMissingBooks();
  }

  constructor(private dataService: DataService) {}

  getAvailableBooks() {
    this.dataService.get('/analytics/available-books').subscribe(
      data => {
        this.availableBooks = data.available_books;
        this.updateChart()
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
        this.updateChart()
      },
      error => {
        console.error(error);
      }
    );
  }

  // getMissingBooks() {
  //   this.dataService.get('/analytics/missing-books').subscribe(
  //     data => {
  //       this.missingBooks = data.missing_books;
  //       this.updateChart()
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  updateChart() {
    this.pieChartInstance.data.datasets[0].data = [
      this.availableBooks,
      this.unreturnedBooks,
      this.missingBooks
    ];
    console.log(this.pieChartInstance)

    this.pieChartInstance.update();
  }

  
  onFilterChange(event: Event) {
    const element = event.target as HTMLSelectElement;
    this.dateFilter = parseInt(element.value);
    this.processData()
  }

  initializeChart() {
    // Assuming you have imported Chart and registerables at the top of your component

    // Get the canvas element for myPieChart
    const ctx = document.getElementById('myPieChart') as HTMLCanvasElement;

    // Initialize Chart.js instance with doughnut type
    this.pieChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        // Labels for the chart segments
        labels: ['Available', 'Unreturned'],

        datasets: [{
          // Label for the dataset
          label: 'Total',

          // Initial data placeholders (you can update this later)
          data: [0, 0, 0],

          // Background colors for each segment
          backgroundColor: [
            '#1A4D2E',   // Available segment color
            '#FFC100',   // Unreturned segment color
             // Missing segment color
          ],

          // Border colors for each segment
          borderColor: [
            '#1A4D2E',   // Available segment border color
            '#FFC100',   // Unreturned segment border color
              // Missing segment border color
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

    // Optionally, you can store the myPieChart instance if you need to update it dynamically
    // this.myPieChart = myPieChart;
  

    const ctx2 = document.getElementById('myLineChart') as HTMLCanvasElement;
    this.departmentChartInstance = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['CCS', 'CBA', 'CEAS', 'CAHS', 'CHTM'],
        datasets: [{
          label: ' Total Borrowed by Department',
          data: [0, 0, 0, 0, 0],
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
this.topBorrowedBooksChart = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['book1', 'book2', 'book3'],  // Define labels here if you want to show them
    datasets: [{
      label: 'Most Borrowed Books',
      data: [0, 0, 0],
      borderColor: '#1A4D2E',
      backgroundColor: '#1A4D2E',
      borderWidth: 0.1,
      barThickness: 30
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12  // Adjust this value to your preferred font size
          }
        }
      },
      x: {
        ticks: {
          display: false,  // Hide the x-axis labels
          font: {
            size: 14  // Adjust this value to your preferred font size if you decide to show them
          }
        }
      }
    },
    plugins: {
      legend: {
        display: true,  // Hide the legend (data name)
      }
    }
  }
});

    
  }
  getBorrowHistory() {
    this.dataService.get('/analytics/borrow-history').subscribe(
      data => {
        console.log(data)
        this.borrowHistory = data
        this.processData();
      },
      error => {
        console.error(error)
      }
    )
  }
  
  processData() {
    let data = this.borrowHistory

    data = this.filterByDate(data)

    if(data.length === 0) {
      this.defaultChartValue()
      return
    }

    this.getBorrowByDepartment(data)
    this.getTopBorrowedBooks(data)
    this.getTopBorrowers(data)

    this.totalBorrowedBooks = data.length
  }

  
  defaultChartValue() {
    this.departmentChartInstance.data.labels = ['CCS', 'CBA', 'CEAS', 'CAHS', 'CHTM']
    this.departmentChartInstance.data.datasets[0].data = [0, 0, 0, 0, 0]

    this.departmentChartInstance.update()

    this.topBorrowedBooksChart.data.labels = ['book1', 'book2', 'book3', 'book4', 'book5'] //ibahin niyo nalang yung default value para di masakit sa mata
    this.topBorrowedBooksChart.data.datasets[0].data = [0, 0, 0, 0, 0]

    this.topBorrowedBooksChart.update()
    this.topBorrowers = []
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
          var date = new Date(data.borrow_date)
          return date.getFullYear() === today.year && 
                date.getMonth() === today.month &&
                date.getDate() === today.day
        })
        break
      case 1:
        let oneWeekBefore = new Date().getTime() - 604800000 //one week
        data = data.filter((data: any) => {
          var date = new Date(data.borrow_date)
          return date.getTime() > oneWeekBefore
        })
        break
      case 2:
        data = data.filter((data: any) => {
          var date = new Date(data.borrow_date)
          return date.getMonth() === today.month &&
                date.getFullYear() === today.year
        } )
        break
    }

    return data
  }

  getBorrowByDepartment(data: any) {
    data = data.reduce(
      (acc: any, borrower: any) => {
        acc[borrower.department_short] = (acc[borrower.department_short] || 0) + 1;
        return acc;
      }, {}
    );

    var topBorrower: any = {
      departments: Object.keys(data),
      total: Object.values(data)
    }


    this.departmentChartInstance.data.labels = topBorrower.departments
    this.departmentChartInstance.data.datasets[0].data = topBorrower.total

    this.departmentChartInstance.update()
  }


  getTopBorrowers(data: any) {
    data = data.reduce(
      (acc: any, book: any) => {
        acc[book.id] = (acc[book.id] || 0) + 1;
        return acc;
      }, {}
    );

    this.topBorrowers = Object.entries(data)
                .map(([id, total]) => ({ id, total }))
                .sort((a: any, b: any)=> (a.total <  b.total ? 1 : -1 ))
                .slice(0, 10)
                .map((top) => {
                  var borrower = this.borrowHistory.find((history: any) => history.id == top.id)
              
                  return { 
                    name: borrower.first_name + " " + borrower.last_name,
                    department: borrower.department_short,
                    total: top.total
                  }
                })
  }

  getTopBorrowedBooks(data: any) {
    data = data.reduce(
      (acc: any, book: any) => {
        acc[book.title] = (acc[book.title] || 0) + 1;
        return acc;
      }, {}
    );

    data = Object.entries(data)
                .map(([title, total]) => ({ title, total }))
                .sort((a: any, b: any) => b.total - a.total)
                .slice(0, 7);

    const topSevenBooks: any = {
      title: data.map((book: any) => book.title),
      total: data.map((book: any) => book.total)
    };

    this.topBorrowedBooksChart.data.labels = topSevenBooks.title
    this.topBorrowedBooksChart.data.datasets[0].data = topSevenBooks.total

    this.topBorrowedBooksChart.update()     

  }
}