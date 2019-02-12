import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/student.json';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  student: any;
  title= "Administración de reportes";
  constructor() { }

  ngOnInit() {
    this.student = SampleJson;

  }

}
