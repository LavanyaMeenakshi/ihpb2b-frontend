import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';
import { Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ThreeSixtyViewEmployeeComponent } from './three-sixty-view-employee.component';
import { DataService } from '../../core/services/data.service';
import { SearchComponent } from '../../shared/components/search/search.component';
import { EmployeeSearchTableComponent } from '../employee-search-table/employee-search-table.component';
import { EmployeeSearchResultsComponent } from '../employee-search-results/employee-search-results.component';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeWithPCP } from '../employeewithPCP.model';
import { SpendingSummaryComponent } from 'src/app/enroll/spending-summary/spending-summary.component';
import { ProgressBarModule } from 'primeng/progressbar'
import { TableModule } from 'primeng/table';
import { ClaimSearchComponent } from 'src/app/enroll/claim-search/claim-search.component';

//stubed router class to mock the navigate method.
class RouterStub {
  navigate(url: string) { return url; }
}

fdescribe('ThreeSixtyView', () => {
  let threeSixtyViewFixture: ComponentFixture<ThreeSixtyViewEmployeeComponent>;

  // configure the testbed asynchronously.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        ProgressBarModule,
        TableModule
      ],
      declarations: [
        ThreeSixtyViewEmployeeComponent,
        SearchComponent,
        EmployeeSearchResultsComponent,
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

  beforeEach(() => {
    // create component fixture and populate dummy data.
    threeSixtyViewFixture = TestBed.createComponent(ThreeSixtyViewEmployeeComponent);
    // test objects for stubbing
    threeSixtyViewFixture.componentInstance.employee = [new Employee(
      '000123', 'Member_First_Name', 'Member_Last_Name', 'Gender', 'Age', 'Opted_Plan', 
      '1141 Member_Street_Address Road', 'Member_City', 44414, 'Member_State', 'Member_County', 'Pending', 'Yes'
    )];
    threeSixtyViewFixture.componentInstance.employeeWithPCP = [new EmployeeWithPCP(
      '000123', 'Member_First_Name', 'Member_Last_Name', 'Gender', 'Age', 'Opted_Plan', 
      'Member_Street_Address', 'Member_City', 44414, 'Member_State', 'Member_County',
      'PCP_Last_Name', 'PCP_First_Name', 123, 'Specialty', 123, 'Provider_Street_Address',
      'Provider_City', 'Provider_State_Code', 123, 'Provider_County'
    )];

    // ppy on find plan and status code and return dummy data instead.
    spyOn(threeSixtyViewFixture.componentInstance, 'findPlan').and.returnValue('Test Plan');
    spyOn(threeSixtyViewFixture.componentInstance, 'findStatusCode').and.returnValue('Enrolled');

    // needed so the fixture can update changes.
    threeSixtyViewFixture.detectChanges();
  })

  afterEach(() => {
    // closing resources.
    threeSixtyViewFixture.destroy();
  });

  it('should create three sixty view component', () => {
    expect(threeSixtyViewFixture.componentInstance).toBeTruthy();
  });

  it('should tell ROUTER to navigate when row is clicked',
    /* Inject a router and spy on it. Then check to see that when close button is clicked, 
    the user is navigated to the correct page. */
    inject([Router], (router: Router) => {
      let buttons = threeSixtyViewFixture.nativeElement.querySelectorAll('button');
      let button = buttons[0];
      const spy = spyOn(router, 'navigate');
      button.click();
      const navArgs = spy.calls.first().args[0];
      expect(navArgs).toEqual(['/employee-search-results'],
        'should nav to employee search results screen')
      threeSixtyViewFixture.detectChanges();
    })
  );

  it('should toggle #show when #more-button is clicked', () => {
    // setup shorthand for testing objects
    const comp: ThreeSixtyViewEmployeeComponent = threeSixtyViewFixture.componentInstance;
    const elem: HTMLElement = threeSixtyViewFixture.nativeElement.querySelector('#more-button');

    // click the button, check that properties change
    expect(comp.show).toBe(false, 'disabled at first');
    elem.click();
    expect(comp.show).toBe(true, 'toggled after click');
    expect(comp.moreOrLess).toBe("Less", 'display changes after click');
    elem.click();
    expect(comp.show).toBe(false, 'toggled back off after click');
    expect(comp.moreOrLess).toBe("More", 'display changes back after click');
  })
});
