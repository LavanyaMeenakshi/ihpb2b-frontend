import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { EmployeeService } from '../../../manage/employee.service';
import { Router } from '@angular/router';
import { FilterService } from '../../../core/services/filter.service';
import { EventEmitterService } from '../../../manage/event-emitter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private employeeService: EmployeeService,
    private filterService: FilterService,
    public router: Router,
    private eventEmitterService: EventEmitterService
  ) {

  }

  //your dev searchComp
  planList: Object[];
  employeeId: string = '';
  message: string = '';

  //ricks dev searchComp
  states: string[]
  selectedState: any;
  selectedPlan: any;
  selectedCity: any;
  selectedEnrollment: any;
  idNumber: number
  empList: any
  outList: any = []
  checked: boolean
  check: boolean

  planOptions = [];

  enrollmentOptions = [];

  stateOptions = [];

  cityOptions = [];


  ngOnInit() {
    this.cityOptions = [];
    this.states = [];
    this.selectedState = "";
    this.selectedPlan = "";
    this.selectedCity = "";
    this.selectedEnrollment = "";
    this.dataService.getPlans().subscribe(plans => this.planList = plans);
    this.employeeService.getEmployees()
      .subscribe(employees => {
        this.planOptions = [];
        this.planOptions
          .push({ name: "---", value: undefined});
        let planList = this.filterService.getAllDifferentValues(employees, "Opted Plan");
        this.dataService.getPlans()
          .subscribe(plans => {
            let iter = 0;
            for (let plan of planList) {
              iter += 1;
              let nextPlan = { name: this.filterService.findPlan(plan, plans), value: plan };
              this.planOptions = [...this.planOptions, nextPlan];
              //console.log(this.planOptions);
              //alert(JSON.stringify(this.planOptions));
            }
          })
        console.log(this.planOptions);
        let enrollmentOptions = this.filterService.getAllDifferentValues(employees, "834 Enrollment File Status");
        this.dataService.getStatusCodes()
          .subscribe(codes => {
            this.enrollmentOptions = [];
            this.enrollmentOptions
              .push({ name: "---", value: undefined});
            for (let code of enrollmentOptions) {
              this.enrollmentOptions
                .push({ name: this.filterService.findStatusCode(code, codes), value: code });
            }
          })
        let stateList = this.filterService.getAllDifferentValues(employees, "Member State");
        this.stateOptions = [];
        this.stateOptions
          .push({ name: "---", value: undefined});
        for (let state of stateList) {
          this.stateOptions.push({ name: state, value: state });
        }
      })
    this.checked = false
    console.log(this.planOptions)
  }

  setCities(state) {
    console.log("setCities() was called");
    console.log(this.selectedState)
    console.log(state)
    this.cityOptions = [];
    this.employeeService.getEmployees().subscribe(employees => {
      let cityList =
        this.filterService.getValuesBasedOnDifferentAttribute(employees, "Member City", "Member State", this.selectedState.value);
      this.cityOptions = [];
      this.cityOptions
        .push({ name: "---", value: undefined});
      for (let city of cityList) {
        console.log(city);
        this.cityOptions.push({ name: city, value: city })
      }
    })
  }

  checkBox() {
    this.checked = !this.checked;
  }

  checkBoxClick() {
    this.clearSearch();
    this.clearDropdowns();
    this.checkBox();
  }

  searchBarClick() {
    this.clearDropdowns();
    this.clearCheck();
  }

  dropDownClick() {
    this.clearCheck();
    this.clearSearch();
  }

  clearSearch() {
    let searchbar: HTMLElement = document.getElementById("search-field");
    console.log("the value of idNumber: " + this.idNumber);
    this.idNumber = undefined;
  }

  clearDropdowns() {
    this.selectedState = "";
    this.selectedPlan = "";
    this.selectedCity = "";
    this.selectedEnrollment = "";
  }

  clearCheck() {
    this.check = false;
    this.checked = false;
    console.log(this.checked)
    console.log(this.selectedPlan)
    console.log(this.selectedEnrollment)
    console.log(this.selectedState)
    console.log(this.selectedCity)
    let idExists = "no";
    if (this.idNumber) {
      idExists = "yes";
    }
    console.log(idExists)

  }

  search() {
    console.log(this.checked)
    console.log(this.selectedPlan)
    console.log(this.selectedState)
    console.log(this.selectedCity)
    console.log(this.selectedEnrollment)
    console.log(this.idNumber);

    //this.employeeService.getEmployees().subscribe(emplist => this.empList = emplist)

    localStorage.clear()
    if (this.checked) {
      localStorage.setItem("checked", "true")
    } else if (this.idNumber) {
      localStorage.setItem("use id", "true")
      this.employeeId = "MBR" + this.idNumber;
      console.log(this.employeeId)
      localStorage.setItem("search id", this.employeeId)
    } else {
      localStorage.setItem("use dropdowns", "true")
      localStorage.setItem("search plan", this.selectedPlan.value);
      localStorage.setItem("search enrollment", this.selectedEnrollment.value);
      localStorage.setItem("search state", this.selectedState.value);
      localStorage.setItem("search city", this.selectedCity.value);
    }
    if (this.router.url !== '/employee-search-results') {
      this.router.navigate(['/employee-search-results']) ;
    }
    this.eventEmitterService.onButtonClick()
  }

  navToESR() {
    localStorage.clear() ;
    this.router.navigate(['/employee-search-results'])
  }

  pressedEnter(event) {

    if (event.key == "Enter" && this.validateId(this.employeeId)) {
      this.message = "Go to table" + " with id : " + this.employeeId;
    } else {
      this.message = "Invalid search";
    }
  }

  validateId(value): boolean {
    return /^\d+$/.test(value);
  }



}
