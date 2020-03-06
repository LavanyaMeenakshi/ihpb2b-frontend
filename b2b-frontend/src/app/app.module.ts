import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeSearchTableComponent } from './manage/employee-search-table/employee-search-table.component';
import { DataService } from './core/services/data.service';
import { SearchComponent } from './shared/components/search/search.component';
import { EmployeeSearchResultsComponent } from './manage/employee-search-results/employee-search-results.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeService } from './manage/employee.service';
import { SpendingSummaryComponent } from './enroll/spending-summary/spending-summary.component';
import { ProgressBarModule } from 'primeng/progressbar'
import { TableModule, Table } from 'primeng/table';
import { ThreeSixtyViewEmployeeComponent } from './manage/three-sixty-view-employee/three-sixty-view-employee.component';
import { ClaimService } from './core/services/claim.service';
import { PlanService } from './core/services/plan.service';
import { ClaimSearchComponent } from './enroll/claim-search/claim-search.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DialogModule } from 'primeng/dialog';
import { EventEmitterService } from './manage/event-emitter.service';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSearchResultsComponent,
    EmployeeSearchTableComponent,
    SearchComponent,
    ThreeSixtyViewEmployeeComponent,
    SpendingSummaryComponent,
    ClaimSearchComponent,
    FooterComponent,
    NavbarComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    DropdownModule,
    ProgressBarModule,
    TableModule,
    CheckboxModule,
    PanelModule,
    DialogModule,
    MenubarModule,
  ],
  providers: [
    DataService,
    EmployeeService,
    PlanService,
    ClaimService,
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
