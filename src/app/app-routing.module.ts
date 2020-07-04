import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './components/department/department.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { StudentsComponent } from './components/students/students.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'department',component:DepartmentComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'students',component:StudentsComponent},
  {path:'course',component:CourseComponent},
  {path:'getlocation',component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
