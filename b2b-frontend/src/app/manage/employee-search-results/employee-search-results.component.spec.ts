import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { EmployeeSearchResultsComponent } from './employee-search-results.component';
import { Router } from "@angular/router";
import { SearchComponent } from '../../shared/components/search/search.component';
import { ThreeSixtyViewEmployeeComponent } from '../three-sixty-view-employee/three-sixty-view-employee.component';
import { EmployeeSearchTableComponent } from '../employee-search-table/employee-search-table.component';
import { DataService } from 'src/app/core/services/data.service';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { SpendingSummaryComponent } from 'src/app/enroll/spending-summary/spending-summary.component';
import {ProgressBarModule} from 'primeng/progressbar'
import { TableModule, Table} from 'primeng/table';
import { ClaimSearchComponent } from 'src/app/enroll/claim-search/claim-search.component';

class RouterStub {
  navigate(url: string) { return url; }
}

describe('EmployeeSearchResultsComponent', () => {

  let employeeSearchResultsFixture: ComponentFixture<EmployeeSearchResultsComponent>;

  // Configure the testbed asynchronously.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        HttpClientModule,
        ProgressBarModule,
        TableModule
      ],
      declarations: [
        EmployeeSearchResultsComponent, 
        SearchComponent, 
        ThreeSixtyViewEmployeeComponent, 
        EmployeeSearchTableComponent,
        SpendingSummaryComponent,
        ClaimSearchComponent
      ],
      providers: [
        DataService, 
        EmployeeService, 
        HttpClientModule, 
        { provide: Router, useClass: RouterStub }
      ]
    }).compileComponents();
  }));

  //Create the component and turn on detecting updates.
  beforeEach(() => {
    employeeSearchResultsFixture = TestBed.createComponent(EmployeeSearchResultsComponent);
    employeeSearchResultsFixture.detectChanges();
  })

  //Closing resources.
  afterEach(() => {
    employeeSearchResultsFixture.destroy();
  })

  it('should create', () => {
    expect(employeeSearchResultsFixture.componentInstance).toBeTruthy();
  });

  it('should tell ROUTER to navigate when close button is clicked',

    /* Inject a router and spy on it. Then check to see that when close button is clicked, 
    the user is navigated to the correct page. */
    inject([Router], (router: Router) => {
      let buttons = employeeSearchResultsFixture.nativeElement.querySelectorAll('button');
      let button = buttons[0];
      const spy = spyOn(router, 'navigate');
      button.click();
      const navArgs = spy.calls.first().args[0];
      expect(navArgs).toEqual(['/', 'guidebook'], 'should nav to home page')
      employeeSearchResultsFixture.detectChanges();
    }
    ));
});
