import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import { Client } from 'app/models/client.model';
import { ClientService } from 'app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public emailChartType: ChartType;
    public emailChartData: any;
    public emailChartLegendItems: LegendItem[];

    public hoursChartType: ChartType;
    public hoursChartData: any;
    public hoursChartOptions: any;
    public hoursChartResponsive: any[];
    public hoursChartLegendItems: LegendItem[];

    public activityChartType: ChartType;
    public activityChartData: any;
    public activityChartOptions: any;
    public activityChartResponsive: any[];
    public activityChartLegendItems: LegendItem[];
    clients: Client[];
    constructor(private clientService: ClientService) { }

  
    ngOnInit() {
    this.clientService.getAllClients().subscribe(
      (clients: Client[]) => {
          this.clients = clients;
          console.log(this.clients)
          const sizes: number[] = this.clients['total'];
const total: number = 150; // Total value to represent 100%
      },
      (error: any) => {
          console.error('Failed to get clients:', error);
      }
  );
  console.log(this.clients)
    //this.clients.sort((a, b) => a.total - b.total);
      this.emailChartType = ChartType.Pie;
      this.emailChartData = {
        labels: ['62%', '32%', '6%'],
        series: [62, 32, 6]
      };
      this.emailChartLegendItems = [
        { title: "MR. Ahmed XX's Farm", imageClass: 'fa fa-circle text-info' },
        { title: "MR. Joe YY's Farm", imageClass: 'fa fa-circle text-danger' },
        { title: 'Others', imageClass: 'fa fa-circle text-warning' }
      ];

      this.hoursChartType = ChartType.Line;
      this.hoursChartData = {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug' , 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [28, 38, 49, 49, 55, 58, 69, 69, 0, 0, 0, 0],
          [6, 15, 14, 24, 28, 33, 43, 43, 0, 0, 0, 0],
          [2, 11, 6, 10, 19, 23, 30, 30, 0, 0, 0, 0]
        ]
      };
      this.hoursChartOptions = {
        low: 0,
        high: 100,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false,
        },
        lineSmooth: Chartist.Interpolation.simple({
          divisor: 5
        }),
        showLine: false,
        showPoint: false,
      };
      this.hoursChartResponsive = [
        ['screen and (max-width: 640px)', {
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.hoursChartLegendItems = [
        { title: 'Very Satisfied', imageClass: 'fa fa-circle text-info' },
        { title: 'Satisfied', imageClass: 'fa fa-circle text-warning' },
        { title: 'Unsatisfied', imageClass: 'fa fa-circle text-danger' }
      ];

      this.activityChartType = ChartType.Bar;
      this.activityChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
        ]
      };
      this.activityChartOptions = {
        seriesBarDistance: 10,
        axisX: {
          showGrid: false
        },
        height: '245px'
      };
      this.activityChartResponsive = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      this.activityChartLegendItems = [
        { title: 'Tesla Model S', imageClass: 'fa fa-circle text-info' },
        { title: 'BMW 5 Series', imageClass: 'fa fa-circle text-danger' }
      ];


    }
    

}
function convertToPercentage(sizes: number[], total: number): number[] {
  const percentages: number[] = [];

  // Calculate the sum of sizes
  const sum = sizes.reduce((acc, size) => acc + size, 0);

  // Calculate percentages for each size
  for (const size of sizes) {
    const percentage = (size / sum) * 100;
    percentages.push(percentage);
  }

  return percentages;
}