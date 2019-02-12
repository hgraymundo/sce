import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SchoolComponent } from './components/school/school.component';
import { AcademicOfferComponent } from './components/academic-offer/academic-offer.component';
import { PeriodComponent } from './components/period/period.component';
import { GroupComponent } from './components/group/group.component';
import { PartialComponent } from './components/partial/partial.component';
import { StudentComponent } from './components/student/student.component';
import { HumanResourceComponent } from './components/human-resource/human-resource.component';
import { ScoreComponent } from './components/score/score.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportComponent } from './components/report/report.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'school', component: SchoolComponent },
  { path:'academic-offer', component: AcademicOfferComponent },
  { path:'period', component: PeriodComponent },
  { path:'group', component: GroupComponent },
  { path:'student', component: StudentComponent },
  { path:'human-resource', component: HumanResourceComponent },
  { path:'score', component: ScoreComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'report', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
