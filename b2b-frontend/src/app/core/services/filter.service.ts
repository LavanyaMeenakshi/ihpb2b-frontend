import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  getAllDifferentValues(data: Array<any>, attribute: string): Array<any> {
    let valueList = [];
    for (let row of data) {
      if (!valueList.includes(row[attribute])) {
        valueList.push(row[attribute])
      }
    }
    valueList.sort()
    return valueList;
  }

  getValuesBasedOnDifferentAttribute(data: Array<any>, attribute: string, diffAttribute: string, diffValue: string): Array<any> {
    let valueList = [];
    for (let row of data) {
      if (!valueList.includes(row[attribute]) && row[diffAttribute] == diffValue) {
        valueList.push(row[attribute])
      }
    }
    valueList.sort()
    return valueList;
  }

  findPlan(planNumber, plans) {
    for (var plan of plans) {
      if (plan["Plan ID"] == planNumber) {
        return plan["Plan Name"];
      }
    }
    return "No Plan";
  }

  findStatusCode(codeNumber, codes) {
    for (var code of codes) {
      if (code["Code"] == codeNumber) {
        return code["Description"];
      }
    }
    return "Not Valid Code";
  }

  determineEnroll(codeNumber) {
    if (codeNumber == "999") {
      return "Enrolled";
    } else {
      return "Not Enrolled"
    }
  }

}
