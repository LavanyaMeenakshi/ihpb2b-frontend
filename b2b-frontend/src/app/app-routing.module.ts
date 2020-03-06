import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './shared/components/search/search.component';
import { EmployeeSearchResultsComponent } from './manage/employee-search-results/employee-search-results.component';
import { ThreeSixtyViewEmployeeComponent } from './manage/three-sixty-view-employee/three-sixty-view-employee.component';



export const routes: Routes = [
  {path:'', component: SearchComponent},
  {path: 'employee-search-results', component: EmployeeSearchResultsComponent},
  {path: 'three-sixty-employee', component: ThreeSixtyViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
