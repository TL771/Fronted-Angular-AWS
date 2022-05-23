import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { AddSubjectComponent } from './pages/withtopmenu/add-subject/add-subject.component';
import { HowtopageComponent } from './pages/withtopmenu/howtopage/howtopage.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'home',component: HowtopageComponent},
  {path: 'add-subject',component: AddSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
