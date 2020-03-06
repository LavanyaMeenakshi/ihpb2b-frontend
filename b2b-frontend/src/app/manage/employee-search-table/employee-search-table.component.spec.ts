import { EmployeeSearchTableComponent } from './employee-search-table.component';
import { DataService } from 'src/app/core/services/data.service';
import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { EmployeeSearchResultsComponent } from '../employee-search-results/employee-search-results.component';
import { ThreeSixtyViewEmployeeComponent } from '../three-sixty-view-employee/three-sixty-view-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { SpendingSummaryComponent } from 'src/app/enroll/spending-summary/spending-summary.component';
import {ProgressBarModule} from 'primeng/progressbar'
import { ClaimSearchComponent } from 'src/app/enroll/claim-search/claim-search.component';
import { TableModule} from 'primeng/table';

//stubed router class to mock the navigate method.
class RouterStub {
  navigate(url: string) { return url; }
}

describe('EmployeeSearchTableComponent', () => {
  let myDataSource: any;
  let employeeSearchTableFixture: ComponentFixture<EmployeeSearchTableComponent>;
  let employeeService: EmployeeService;

  // Configure the testbed asynchronously.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeSearchTableComponent, 
        SearchComponent, 
        EmployeeSearchResultsComponent, 
        ThreeSixtyViewEmployeeComponent, 
        SpendingSummaryComponent, 
        ClaimSearchComponent
      ],
      providers: [
        DataService, 
        EmployeeService, 
        HttpClientModule, 
        { provide: Router, useClass: RouterStub }
      ],
      imports: [
        FormsModule, 
        HttpClientModule, 
        ProgressBarModule, 
        TableModule]
    }).compileComponents();
  }));

  beforeEach(() => {

    //create components/ services used and create dummy data.
    employeeService = TestBed.get(EmployeeService);
    employeeSearchTableFixture = TestBed.createComponent(EmployeeSearchTableComponent);
    myDataSource = [{
      "Member ID": "ID",
      "First Name": "Test",
      "Last Name": "Member",
      "Gender": "Male",
      "Age": "22",
      "Opted Plan": "3",
      "Member Street Address": "546-4848 Fermentum Rd.",
      "Member City": "Warren",
      "Member Zip": "19001",
      "Member State": "OH",
      "Member County": "Montgomery",
      "834 Enrollment File Status": "999",
      "New Employee": "Y"
    }]

    //Setup spies that will be used multiple times.
    spyOn(localStorage, 'getItem').withArgs('checked').and.callFake((s: string) => {
      employeeSearchTableFixture.componentInstance.data = myDataSource;
      return s;
    }).withArgs('search criteria').and.callThrough().withArgs('Transferred ID').and.callThrough();
    spyOn(employeeService, 'getEmployees').and.callThrough();
    spyOn(employeeSearchTableFixture.componentInstance, 'findPlan').and.returnValue("Test Plan");
    spyOn(employeeSearchTableFixture.componentInstance, 'findStatusCode')
      .and.returnValue("Test Status Code");
    employeeSearchTableFixture.detectChanges();
  })

  //Closing resources.
  afterEach(() => {
    employeeService = null;
    myDataSource = null;
    employeeSearchTableFixture.destroy();
  })

  it('should create employeeSearchTableFixture', () => {
    expect(employeeSearchTableFixture.componentInstance).toBeTruthy();
  });

  it('should load dummy data correctly and call all the medthods for retrieving the data', () => {
    
    /*Change the data source to utilize our dummy data, 
    and then expect that this data is in fact populated in the table.*/
    let tableRows = employeeSearchTableFixture.nativeElement.querySelectorAll('tr');
    let headerRow = tableRows[0];
    let row1 = tableRows[1];
    expect(localStorage.getItem).toHaveBeenCalled();
    expect(tableRows.length).toBeGreaterThan(1);
    expect(employeeService.getEmployees).toHaveBeenCalled();
    expect(employeeSearchTableFixture.componentInstance.findPlan).toHaveBeenCalled();
    expect(employeeSearchTableFixture.componentInstance.findStatusCode).toHaveBeenCalled();

    employeeSearchTableFixture.detectChanges();

    // Header row.
    expect(headerRow.cells[0].innerHTML).toBe('Employee ID');
    expect(headerRow.cells[1].innerHTML).toBe('Name');
    expect(headerRow.cells[2].innerHTML).toBe('Plan');
    expect(headerRow.cells[3].innerHTML).toBe('Enrollment');
    expect(headerRow.cells[4].innerHTML).toBe('City');
    expect(headerRow.cells[5].innerHTML).toBe('State');

    // Data rows.
    expect(row1.cells[0].innerHTML).toBe('ID');
    expect(row1.cells[1].innerHTML).toBe('Test Member');
    expect(row1.cells[2].innerHTML).toBe('Test Plan');
    expect(row1.cells[3].innerHTML).toBe('Test Status Code')
    expect(row1.cells[4].innerHTML).toBe('Warren');
    expect(row1.cells[5].innerHTML).toBe('OH');
  });

  it('should tell ROUTER to navigate when row is clicked',

    /*Inject a router and spy on it. Then check to see that when a row is clicked, 
    the user is navigated to the correct page.*/
    inject([Router], (router: Router) => {
      let tableRows = employeeSearchTableFixture.nativeElement.querySelectorAll('tr');
      let row1 = tableRows[1];
      const spy = spyOn(router, 'navigate');
      row1.click();
      const navArgs = spy.calls.first().args[0];
      expect(navArgs).toEqual(['/three-sixty-employee'], 'should nav to three sixty employee screen');
      employeeSearchTableFixture.detectChanges();
    }
    ));
})
