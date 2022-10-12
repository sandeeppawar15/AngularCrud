import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  title = 'Bar Chart';

  public barChartLegend = true;

  public barChartPlugins = [];

  // public barChartOptions: ChartConfiguration<'bar'>['options'] = {
  //   responsive: false
  // };


  public barChartOptions: ChartOptions = {
    responsive: true,
    // scales: {
    //   xAxes: {
    //     display: true
    //   }
    // }
  }

  maxLimit: number = Math.random() * 555;




  public barChartData: ChartConfiguration<'line'>['data'] = {
    // labels: ['2022 Jan', '2022 Feb', '2022 Mar', '2022 Apr', '2022 May', '2022 June', '2022 July', '2022 Aug', '2022 Sept', '2022 Oct', '2022 Nov', '2022 Dec'],
    labels: ['2022 Jan', '2022 Feb', '2022 Mar', '2022 Apr', '2022 May', '2022 June', '2022 July', '2022 Aug', '2022 Sept', '2022 Oct', '2022 Nov', '2022 Dec'],
    datasets: [
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Bestbuy' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Walmart' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Samsung' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Sams Club' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Target' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Google' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Walmart Dotcom' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'ATB' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Apple' },
      // { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Microsoft' }
      {
        label: 'Bestbuy',
        data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)],
        // backgroundColor:'#blue',
        stack: 'Stack 0',
      },
      {
        label: 'Walmart',
        data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)],
        // backgroundColor:red,
        stack: 'Stack 0',
      }
    ]
  };


  // public barChartOptions: any = {
  //   scaleShowVerticalLines: false,
  //   responsive: true,
  //   scales: {
  //     xAxes: [{
  //       stacked: true
  //     }],
  //     yAxes: [{
  //       stacked: true
  //     }]
  //   }
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
