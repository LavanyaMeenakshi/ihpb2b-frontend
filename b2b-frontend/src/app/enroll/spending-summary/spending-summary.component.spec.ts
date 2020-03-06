import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingSummaryComponent } from './spending-summary.component';
import {ProgressBarModule} from 'primeng/progressbar';
import { DataService } from '../../core/services/data.service';
import { HttpClientModule } from '@angular/common/http';




describe('SpendingSummaryComponent', () => {
  let service:DataService
  let http:HttpClientModule
  let component: SpendingSummaryComponent;
  let fixture: ComponentFixture<SpendingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingSummaryComponent ],
      providers: [DataService, HttpClientModule],
      imports: [ProgressBarModule, HttpClientModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(DataService);
    http = TestBed.get(HttpClientModule);
    fixture = TestBed.createComponent(SpendingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it("should display corrrect percentage", () => {
  //   component.percentageDeductibleUsed = 45
  //   let bar = document.getElementsByTagName('p-progressBar')
  //   let value = bar[0].setAttribute("ng-reflect-value", "45")
  //   expect(bar[0].hasAttribute("ng-reflect-value")).toBeTruthy()
  // })

  // it('should get data from service', () => {
  //   spyOn(service, 'getEligibility').and.callThrough();

  //   expect(service.getEligibility).toHaveBeenCalled();
  //   expect(component.data).toBeTruthy();


  // })
  
});
