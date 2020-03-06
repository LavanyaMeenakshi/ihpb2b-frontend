import { Component, OnInit } from '@angular/core';


import { Injectable } from '@angular/core';
import { Employee } from '../shared/models/employee.model'
import { EmployeeWithPCP } from './employeewithPCP.model'
import { Observable } from 'rxjs'
import employeeList from '../../assets/json/employees.json';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

export interface EmployeeInterface {
  Member_ID ;   
  Member_First_Name ;   
  Member_Last_Name ;   
  Gender ;   
  Age ;   
  Opted_Plan ;   
  Member_Street_Address ;   
  Member_City ;   
  Member_Zip ; number 
  Member_State ;   
  Member_County ;   
  Enrollment_File_Status ;   
  New_Employee ;   
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee_url: string = '../../../assets/json/employee.json';
  private servedEmployeesJson:string = 'http://localhost:3000/employees'
  private employeewithPCP_url:string = 'http://localhost:3000/employeeswithPCP';
  private employeeList:any = employeeList
  constructor(private http: HttpClient) { }
  criteriaSearched:string;
  criteriaValue:string;

  

  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.servedEmployeesJson);
  }

  filterEmployeeByAttribute(attributeName:string, localVarName:string): Observable<Employee[]>{
    let attributeValue = localStorage.getItem(localVarName);
    return this.http.get<Employee[]>(this.servedEmployeesJson+"/?"+attributeName+"="+attributeValue);
  }

  filterEmployeeByMultipleAttributes(attributeNames:Array<string>, localVarNames:Array<string>): Observable<Employee[]>{
    let searchString:string = this.servedEmployeesJson+"/?";

    //this method builds a database query string from an array of attribute names and an array of local variable
    //  names values by iterating throught the value positions (0,1,2,etc). This assumes that the arrays are the same length.
    for (let varPosition in localVarNames){
        let attributeName = attributeNames[varPosition];
        let attributeValue = localStorage.getItem(localVarNames[varPosition]);
        searchString = searchString + attributeName+"="+attributeValue+"&"
    }
    console.log(searchString)
    return this.http.get<Employee[]>(searchString);
  }
  

  getEmployeesWithPCP(): Observable<EmployeeWithPCP[]>{
    let data = this.http.get<EmployeeWithPCP[]>(this.employeewithPCP_url);
    return data;
   }

   filterEmployeeByLocation(attributeName:string, attributeName2:string, localVarName1:string, localVarName2:string): Observable<Employee[]>{
    let attributeValue = localStorage.getItem(localVarName1);
    let attributeValue2 =localStorage.getItem(localVarName2);
      return this.http.get<Employee[]>(this.servedEmployeesJson+"/?"+attributeName+"="+attributeValue+"&"+attributeName2+"="+attributeValue2);
    }

   filterEmployeesWithPCPByAttribute(attributeName:string, localVarName:string): Observable<EmployeeWithPCP[]>{
    let attributeValue = localStorage.getItem(localVarName);
    return this.http.get<EmployeeWithPCP[]>(this.employeewithPCP_url  +"/?"+attributeName+"="+attributeValue);
   }









  //uncomment when backend is done

  // getEmployees(): Observable<Employee[]>{
  //   return this.employeeList;
  // }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
