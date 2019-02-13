import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/group.json';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group: any;
  title= "administración de grupos";
  title_new_button= "Nuevo grupo";
  filter: String = '';
  p: String;
  constructor() { }

  ngOnInit() {
    this.group = SampleJson;
  }

}
