import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-spending-summary',
  templateUrl: './spending-summary.component.html',
  styleUrls: ['./spending-summary.component.css']
})
export class SpendingSummaryComponent implements OnInit {

  percentageDeductibleUsed:number;
  percentageOopUsed:number;
  data:any = [];
  id:string;
  deductible:number;
  oopMax:number;
  amountUsed:number;
  deductibleRemaining:number;
  oopRemaining:number;
  widthPercent:string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.id = "MBR00052"
    this.dataService.getEligibility().subscribe(eligibility => {
      console.log(eligibility)
      this.data = eligibility.filter(datapoint => datapoint["Member ID"] == this.id);
      this.deductible=this.data[0]["Deductibles"]
      this.oopMax=this.data[0]["Out-of-pocket max"]
      this.amountUsed = Math.floor((Math.random()*this.deductible))
      this.deductibleRemaining = this.deductible - this.amountUsed
      this.oopRemaining = this.oopMax - this.amountUsed
      this.percentageDeductibleUsed = Math.floor((this.amountUsed/this.deductible)*100)
      this.percentageOopUsed = Math.floor((this.amountUsed/this.oopMax)*100)
      this.widthPercent = this.percentageDeductibleUsed + "%"
    }
    )

    }




}
