import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/rh.json';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css']
})

export class HumanResourceComponent implements OnInit {
  personal: any;
  title= "Administración de Personal";
  title_new_button= "Nuevo Personal";

  constructor() { }

  ngOnInit() {
    this.personal = SampleJson;
  }

}
