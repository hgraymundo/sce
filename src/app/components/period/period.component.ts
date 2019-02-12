import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/period.json';


@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit {
  ciclo: any;
  title= "Administración de Ciclos Escolares";
  title_new_button= "Nuevo Ciclo Escolar";

  constructor() { }

  ngOnInit() {
    this.ciclo = SampleJson;
  }

}
