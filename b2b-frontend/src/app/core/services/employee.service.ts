import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Employee } from '../../../assets/model/employee.model'
import { Observable,throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/json/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url).pipe(
      map(data => {
        return data;
      }),
      // "catchError" instead "catch"
      catchError(error => {
        return Observable.throw(error.message || "Server Error");
      })
      );
    }
  errorHandler(error: any){
    return Observable.throw(error.message || "Server Error");
  }
}
