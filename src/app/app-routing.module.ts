import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OverviewComponent } from './overview/overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:DepartmentsComponent},
  {path:'employees',component:EmployeeListComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'department/:id',
   component:DepartmentDetailsComponent,
   children:[
     {path:'overview',component:OverviewComponent},
     {path:'contact',component:ContactComponent}
   ]
  },
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
