import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../shared/models/employee.model';
import { EmployeeWithPCP } from '../employeewithPCP.model';

import { Plan } from '../plan.model';
import { StatusCode } from '../statuscode.model';
import { PlanService } from '../../core/services/plan.service';
import { ClaimService } from '../../core/services/claim.service';


@Component({
  selector: 'app-three-sixty-view-employee',
  templateUrl: './three-sixty-view-employee.component.html',
  styleUrls: ['./three-sixty-view-employee.component.css']
})

export class ThreeSixtyViewEmployeeComponent implements OnInit {

  employee: Employee[];
  employeeWithPCP: EmployeeWithPCP[];

  dentist = { name: "Not Available" }

  annualExam = { date: "Not Available" }

  employeeAdditionalDetails = [{
    access: "Not Available",
    education: "Not Available",
    employment: "Not Available",
    income: "Not Available",
    fitness: "Not Available",
    diet: "Not Available",
    supportNetworks: "Not Available"
  }]
  plans: Plan[];
  codes: StatusCode[];

  show: boolean = false;
  moreOrLess: any = "More";


  constructor(
    private employeeService: EmployeeService,
    private dataService: DataService,
    private claimService: ClaimService,
    private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem("Transferred ID"))
    this.employee = [new Employee("Not Available", "", "Not Available", "Not Available",
    "Not Available","Not Available","Not Available","Not Available",null,
    "Not Available","Not Available","Not Available","Not Available",)]

    this.employeeWithPCP = [new EmployeeWithPCP("Not Available","Not Available","Not Available","Not Available",
        "Not Available","Not Available","Not Available","Not Available",null,"Not Available","Not Available",
        "Not Available","",null,"Not Available",null,"Not Available","Not Available",
        "Not Available",null,"Not Available")]

        console.log(this.employeeWithPCP["PCP First Name"])
    this.employeeService.filterEmployeeByAttribute("Member ID", "Transferred ID")
      .subscribe((employee) => {
        if(employee.length!=0)
        this.employee = employee;
      });
    this.employeeService.filterEmployeesWithPCPByAttribute("Member ID", "Transferred ID")
      .subscribe((employee) => {
        console.log(employee)
        console.log(employee.length==0)
        if(employee.length!=0){ 
        this.employeeWithPCP = employee;
        }
        console.log(this.employeeWithPCP["PCP First Name"]);
      });
    this.dataService.getPlans().subscribe(plans => this.plans = plans);
    this.dataService.getStatusCodes().subscribe(codes => this.codes = codes);



  }

  findPlan(planNumber) {
    for (let plan of this.plans) {
      if (plan["Plan ID"] == planNumber) {
        return plan["Plan Name"];
      }
    }
    return "No Plan";
  }

  findStatusCode(codeNumber) {
    if (codeNumber.toString() == "999") {
      return "Enrolled";
    }
    return "Not Enrolled";
  }

  showMoreOrLess() {
    // flip variable, update display string depending on state of this.show
    this.show = !this.show;
    this.moreOrLess = this.show ? "Less" : "More";
  }



  goBack(): void {
    this.router.navigate(['/employee-search-results']);
  }
}

