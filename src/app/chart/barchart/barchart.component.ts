import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];
  maxLimit: number = 70;
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2022 Jan', '2022 Feb', '2022 Mar', '2022 Apr', '2022 May', '2022 June', '2022 July', '2022 Aug', '2022 Sept', '2022 Oct', '2022 Nov', '2022 Dec'],
    datasets: [
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Bestbuy' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Walmart' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Samsung' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Sams Club' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Target' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Google' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Walmart Dotcom' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'ATB' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Apple' },
      { data: [Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit), Math.round(Math.random() * this.maxLimit)], label: 'Microsoft' }


    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
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
