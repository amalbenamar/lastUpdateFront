import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  const mixedChart = new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Nouveau_Ticket', 'En cours', 'Traité', 'Résolu'],
        datasets: [{
            label: 'Ticket Statut',
            data: [5, 10,18,25],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(9, 106, 9, 0.5)',
           
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(9, 106, 9, 1)',
             
            ],
            borderWidth: 1
        }]
    },
  
});

const data = new Chart("chart", {
  type:'pie',
  data:{
    labels: ['Nouveau_Ticket', 'En cours', 'Traité', 'Résolu'],
  datasets: [{
    label: 'Ticket Statut',
    data: [5, 10,18,25],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(9, 106, 9, 0.5)',
   
  ],
    hoverOffset: 4
  }],

}
});
}

}
