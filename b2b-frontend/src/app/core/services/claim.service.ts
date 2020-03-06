import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from '../../manage/three-sixty-view-employee/models/claim.model'


@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) { }


  private claim_url:string = 'http://localhost:3000/claims';
  
  getClaimData(){
    return this.http.get<Claim[]>(this.claim_url);
  }


}
