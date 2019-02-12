import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/student.json';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: any;
  title= "Administración de estudiantes";
  title_new_button= "Nuevo estudiante";

  constructor() { }

  ngOnInit() {
    this.student = SampleJson;
  }

}
