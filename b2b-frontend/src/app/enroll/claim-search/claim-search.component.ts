import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../../core/services/claim.service';

import { Claim } from '../../manage/three-sixty-view-employee/models/claim.model';

import ViewEncapsulation from '@angular/core';

@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.css'],
  // encapsulation : ViewEncapsulation.None
})


export class ClaimSearchComponent implements OnInit {
  claims:Claim[];
  claimsCopy: Claim[];
  searchClaimId:string = '';
  constructor(private claimService:ClaimService) { }

  ngOnInit() {
    this.claimService.getClaimData().subscribe(claims => {
      this.claims = claims.sort(function(a,b){
        let firstMilliSeconds = new Date(a.Claim_Begin_DOS).getTime();
        let secondMilliSeconds = new Date(b.Claim_Begin_DOS).getTime();
       return (firstMilliSeconds > secondMilliSeconds) ? -1: 1 
     }).slice(0,5);
     this.claimsCopy = claims;
      console.log(claims);});   
  }


  sortClaimNoDown(){
    this.claims = this.claimsCopy.sort(function(a,b){return (a.Claim_ID > b.Claim_ID) ? -1: 1 }).slice(0,5);

  }

  sortClaimNoUp(){
    this.claims = this.claimsCopy.sort(function(a,b){return (a.Claim_ID > b.Claim_ID) ? 1: -1 }).slice(0,5);

  }

  sortDateDown(){
    this.claims = 
    this.claimsCopy.sort(function(a,b){
       let firstMilliSeconds = new Date(a.Claim_Begin_DOS).getTime();
       let secondMilliSeconds = new Date(b.Claim_Begin_DOS).getTime();
      return (firstMilliSeconds > secondMilliSeconds) ? -1: 1 
    }).slice(0,5);
  }

  sortDateUp(){
    this.claims=
    this.claimsCopy.sort(function(a,b){
       let firstMilliSeconds = new Date(a.Claim_Begin_DOS).getTime();
       let secondMilliSeconds = new Date(b.Claim_Begin_DOS).getTime();
      return (firstMilliSeconds > secondMilliSeconds) ? 1: -1 
    }).slice(0,5);
  }

  sortMemberDown(){
    this.claims=
    this.claimsCopy.sort(function(a,b){return (a.Member_Id.toUpperCase() > b.Member_Id.toUpperCase()) ? -1: 1 }).slice(0,5);
  }

  sortMemberUp(){
    this.claims=
    this.claimsCopy.sort(function(a,b){return (a.Member_Id.toUpperCase() > b.Member_Id.toUpperCase() ) ? 1: -1 }).slice(0,5);
  }

  sortServiceProviderDown(){
    this.claims=
    this.claimsCopy.sort(function(a,b){return (a.Provider_Id.toUpperCase()  > b.Provider_Id.toUpperCase() ) ? -1: 1 }).slice(0,5);
  }

  sortServiceProviderUp(){
    this.claims=
    this.claimsCopy.sort(function(a,b){return (a.Provider_Id.toUpperCase()  > b.Provider_Id.toUpperCase() ) ? 1: -1 }).slice(0,5);
  }

  sortAmountDown(){
 this.claims =
    this.claimsCopy.sort(function(a,b){return (+a.Paid_Amt > +b.Paid_Amt) ? -1: 1 }).slice(0,5);
  }

  sortAmountUp(){
    this.claims = 
    this.claimsCopy.sort(function(a,b){return (+a.Paid_Amt> +b.Paid_Amt) ? 1: -1 }).slice(0,5);
  }

  sortStatusDown(){
    this.claims = 
    this.claimsCopy.sort(function(a,b){return (a.Paid_Status.toUpperCase()  > b.Paid_Status.toUpperCase() ) ? -1: 1 }).slice(0,5);
  }

  sortStatusUp(){
    this.claims = 
    this.claimsCopy.sort(function(a,b){return (a.Paid_Status.toUpperCase()  > b.Paid_Status.toUpperCase() ) ? 1: -1 }).slice(0,5);
  }

  searchClaim(){
    console.log(this.searchClaimId)
    if (!this.searchClaimId) {
      this.claims = this.claimsCopy.slice(0,5);
    } else {
      this.claims = this.claimsCopy.filter(claim => claim.Claim_ID == this.searchClaimId)
    }
  }
}
