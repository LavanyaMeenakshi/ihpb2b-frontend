import { Component, OnInit, Input, NgZone } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Router } from '../../../../node_modules/@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../shared/models/employee.model';
import { EventEmitterService } from '../event-emitter.service';
import { getLocaleTimeFormat } from '../../../../node_modules/@angular/common';


@Component({
  selector: "app-employee-search-table",
  templateUrl: "./employee-search-table.component.html",
  styleUrls: ["./employee-search-table.component.css"]
})
export class EmployeeSearchTableComponent implements OnInit {
  data: Employee[] = [];
  plans: any;
  codes: any;
  employeeToGetDetails = undefined;

  constructor(
    //private sharingService:SharingService,
    private dataService: DataService,
    private employeeService: EmployeeService,
    private router: Router,
    private ngZone: NgZone,
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit() {
    this.loadTableData()
    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService
        .invokeComponentFunction.subscribe((name: string) => {
          this.loadTableData();
          window.location.assign("/employee-search-results");
        })
    }
  }

  loadTableData() {
    console.log(localStorage.getItem("checked"))
    console.log(localStorage.getItem("use id"))
    console.log("USE DROPDOWNS")
    console.log(localStorage.getItem("use dropdowns"))
    console.log(localStorage.getItem("search plan"))
    console.log(localStorage.getItem("search enrollment"))
    console.log(localStorage.getItem("search state"))
    console.log(localStorage.getItem("search city"))

    if (localStorage.getItem("checked")) {
      this.employeeService.getEmployees().subscribe(employees => this.data = employees);
    }

    if (localStorage.getItem("use id")) {
      this.employeeService.filterEmployeeByAttribute("Member ID", "search id").subscribe(employees => this.data = employees);
    }

    if (localStorage.getItem("use dropdowns")) {
      let attributes: Array<string> = [];
      let values: Array<string> = [];

      if (localStorage.getItem("search plan")!="undefined") {
          attributes.push("Opted Plan");
          values.push("search plan");
      }
      if (localStorage.getItem("search enrollment")!="undefined") {
        attributes.push("834 Enrollment File Status");
        values.push("search enrollment");
      }
      if (localStorage.getItem("search state")!="undefined") {
        attributes.push("Member State");
        values.push("search state");
        if (localStorage.getItem("search city")!="undefined") {
          attributes.push("Member City");
          values.push("search city");
        }
      }

      console.log(attributes)
      this.employeeService.filterEmployeeByMultipleAttributes(attributes, values).subscribe(employees => this.data = employees);
    }

    this.dataService.getPlans().subscribe(plans => this.plans = plans);
    this.dataService.getStatusCodes().subscribe(codes => this.codes = codes);
    let searchCriteria = localStorage.getItem('search id')
  }



  findPlan(planNumber) {
    for (var plan of this.plans) {
      if (plan["Plan ID"] == planNumber) {
        return plan["Plan Name"];
      }
    }
    return "No Plan";
  }

  findStatusCode(codeNumber) {
    for (var code of this.codes) {
      if (code["Code"] == codeNumber) {
        return code["Description"];
      }
    }
    return "Not Valid Code";
  }

  goTo360View(employee) {
    this.employeeToGetDetails = employee;
    console.log(this.employeeToGetDetails["Member ID"]);

    localStorage.setItem('Transferred ID', this.employeeToGetDetails["Member ID"]);
    console.log(localStorage.getItem('Transferred ID'))
    this.router.navigate(['/three-sixty-employee']);
  }
}
