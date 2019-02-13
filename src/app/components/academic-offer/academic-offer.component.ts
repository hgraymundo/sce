import { Component, OnInit } from '@angular/core';
import SampleJson  from '../../../assets/dummy-data/offer.json';


@Component({
  selector: 'app-academic-offer',
  templateUrl: './academic-offer.component.html',
  styleUrls: ['./academic-offer.component.css']
})
export class AcademicOfferComponent implements OnInit {
  offer: any;
  title= "Administración de la oferta educativa";
  title_new_button= "Nueva oferta educativa";
  filter: String ='';
  p: String;

  constructor() { }

  ngOnInit() {
    this.offer = SampleJson;

  }

}
