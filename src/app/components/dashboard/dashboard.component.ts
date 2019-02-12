import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import SampleJson  from '../../../assets/dummy-data/dashboard.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboard: any;
  title= "Filtros";
  gender = ['Hombres','Mujers'];
  chart = [];
  constructor() { }

  ngOnInit() {
    console.log(SampleJson)
    var myChart = new Chart('canvas', {
    type: 'bar',
    data: {
        // labels: ["Hombres", "Mujeres"],
        datasets: [{
            label: "Hombres",
            data: [SampleJson[0].male],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },
        {
            label: "Mujeres",
            data: [SampleJson[0].female],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

  this.chart = new Chart ('canvas_2', {
      type: 'pie',
      options: {
        responsive: true,
      },
      data: {
      datasets: [
        {
          backgroundColor: ["rgba(46, 204, 113,0.2)","rgba(252, 92, 101,0.2)"],
          borderColor: ["rgba(32, 191, 107,1.0)","rgba(252, 92, 101,1.0)"],
          borderWidth: 1,
          data: [120,140]
        }],
      labels: ["Aprobados","Reprobados"],
    }
  })

  this.chart = new Chart('canvas_3', {
    type: 'bar',
    data: {
    datasets: [
      {
        backgroundColor: ["rgba(46, 204, 113,0.2)","rgba(15, 185, 177,0.2)","rgba(43, 203, 186,0.2)","rgba(32, 191, 107,0.2)"],
        borderColor: ["rgba(46, 204, 113,1)","rgba(15, 185, 177,1)","rgba(43, 203, 186,1)","rgba(32, 191, 107,1)"],
        borderWidth: 1,
        data: [120,140,135,133]
      }],
    labels: ["Primaria","Secunadaría","Bachillerato", "Licenciatura"],
  },
  options: {
    labels: ["Primaria","Secunadaría","Bachillerato", "Licenciatura"],

      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
  });

  }

}
