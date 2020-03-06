import { Injectable } from '@angular/core';
import planData from '../../../assets/json/planDetails.json';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private planData:any = planData;


  constructor() { }

  getPlanDetails(){
      return this.planData;
  }

}
