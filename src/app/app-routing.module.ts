import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { StudentsComponent } from './components/students/students.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { TournamentsCrudComponent } from './components/tournaments-crud/tournaments-crud.component';
import { SportCrudComponent } from './components/sport-crud/sport-crud.component';
import { CountryCrudComponent } from './components/country-crud/country-crud.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'students',component:StudentsComponent},
  {path:'course',component:CourseComponent},
  {path:'getlocation',component:MapComponent},
  {path:'sport/tournaments', component:TournamentsCrudComponent},
  {path:'sport/sports', component:SportCrudComponent},
  {path:'sport/countries', component:CountryCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
