import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { DataService } from '../../../core/services/data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from 'src/app/manage/employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { EmployeeSearchResultsComponent } from 'src/app/manage/employee-search-results/employee-search-results.component';
import { ThreeSixtyViewEmployeeComponent } from 'src/app/manage/three-sixty-view-employee/three-sixty-view-employee.component';
import { EmployeeSearchTableComponent } from 'src/app/manage/employee-search-table/employee-search-table.component';
import { SpendingSummaryComponent } from 'src/app/enroll/spending-summary/spending-summary.component';
import {ProgressBarModule} from 'primeng/progressbar'
import { TableModule} from 'primeng/table';
import { ClaimSearchComponent } from 'src/app/enroll/claim-search/claim-search.component';

describe('SearchComponent', () => {
  let searchFixture: ComponentFixture<SearchComponent>;
  let employeeSearchTableFixture: ComponentFixture<EmployeeSearchTableComponent>;

  //Configure the testbed asynchronously.
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent, 
        EmployeeSearchResultsComponent, 
        ThreeSixtyViewEmployeeComponent, 
        EmployeeSearchTableComponent, 
        SpendingSummaryComponent, 
        ClaimSearchComponent
      ],
      providers: [
        DataService,
        EmployeeService
      ],
      imports: [
        RouterTestingModule.withRoutes(routes), 
        FormsModule, HttpClientModule, 
        ProgressBarModule, 
        TableModule
      ]
    })
      .compileComponents();
  }));

  //Create the component and turn on detecting updates.
  beforeEach(() => {
    searchFixture = TestBed.createComponent(SearchComponent);
    employeeSearchTableFixture = TestBed.createComponent(EmployeeSearchTableComponent);
    searchFixture.detectChanges();
  });

  it('should get correct search results', () => {

    /*Create a test ID number then check that it is populated in the table when it is searched for 
    with the search component.*/
    let testId: number = Number('000123');
    let open = searchFixture.nativeElement.querySelector('#open-button');
    searchFixture.componentInstance.idNumber = testId;
    open.click();
    let Rows = employeeSearchTableFixture.nativeElement.querySelectorAll('tr');
    let row = Rows[1];
    expect(row.cells[0].innerHTML).toEqual(testId);
  })
})
