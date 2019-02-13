import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/student.json';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  student: any;
  title= "Administración de calificaciones";
  filter: String = '';
  p: String;

  constructor() { }

  ngOnInit() {
    this.student = SampleJson;
  }

}
