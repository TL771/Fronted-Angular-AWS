import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { AddSubjectComponent } from './pages/withtopmenu/add-subject/add-subject.component';
import { HowtopageComponent } from './pages/withtopmenu/howtopage/howtopage.component';
import { OlddataComponent } from './pages/withtopmenu/olddata/olddata.component';
import { AddNewsubjectComponent } from './pages/add-newsubject/add-newsubject.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'home',component: HowtopageComponent},
  {path: 'add-subject',component: AddSubjectComponent},
  {path: 'old-data',component: OlddataComponent},
  {path: 'add-new-subject',component: AddNewsubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
