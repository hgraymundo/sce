import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // para formularios


import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SchoolComponent } from './components/school/school.component';
import { AcademicOfferComponent } from './components/academic-offer/academic-offer.component';
import { PeriodComponent } from './components/period/period.component';
import { GroupComponent } from './components/group/group.component';
import { PartialComponent } from './components/partial/partial.component';
import { StudentComponent } from './components/student/student.component';
import { HumanResourceComponent } from './components/human-resource/human-resource.component';
import { ReportComponent } from './components/report/report.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolComponent,
    AcademicOfferComponent,
    PeriodComponent,
    GroupComponent,
    PartialComponent,
    StudentComponent,
    HumanResourceComponent,
    ReportComponent,
    NavbarComponent,
    HomeComponent,
    ScoreComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule, // para formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
