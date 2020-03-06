import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Claim } from '../../manage/three-sixty-view-employee/models/claim.model'
import { Eligibility } from '../../manage/eligibility.model'
import { Facility } from '../../manage/facility.model'
import { FacilityCode } from '../../manage/facilitycode.model'
import { Provider } from '../../manage/provider.model'
import { ProviderCode } from '../../manage/providercode.model'
import { Plan } from '../../manage/plan.model'
import { StatusCode } from '../../manage/statuscode.model'


import { HttpClient } from '@angular/common/http';
//This service takes the data from the json example files and stores them
// so other components can access them. This could be repurpsed to make the API calls
// in the future.
@Injectable()
export class DataService{
    
    private claim_url:string = 'http://localhost:3000/claims'
    private eligibility_url:string = 'http://localhost:3000/eligibility'
    private facility_url:string = 'http://localhost:3000/facilitydetails'
    private facilitycodes_url:string = 'http://localhost:3000/facilityspecialtytypecodes'
    private provider_url:string = 'http://localhost:3000/providerdetails'
    private providercodes_url:string = 'http://localhost:3000/providerspecialtypecodes'
    private plan_url: string = 'http://localhost:3000/plandetails'
    private statuscodes_url: string = 'http://localhost:3000/statuscodes'


    constructor(private http: HttpClient) { }

    getClaims(): Observable<Claim[]>{
        return this.http.get<Claim[]>(this.claim_url)
    }

    getEligibility(): Observable<Eligibility[]>{
        return this.http.get<Eligibility[]>(this.eligibility_url)
    }

    getFacility(): Observable<Facility[]>{
        return this.http.get<Facility[]>(this.facility_url)
      }
    
    getFacilityCodes(): Observable<FacilityCode[]>{
    return this.http.get<FacilityCode[]>(this.facilitycodes_url)
    }

    getProvider(): Observable<Provider[]>{
        return this.http.get<Provider[]>(this.provider_url)
    }
    
    getProviderCodes(): Observable<ProviderCode[]>{
    return this.http.get<ProviderCode[]>(this.providercodes_url)
    }

    getPlans(): Observable<Plan[]>{
        return this.http.get<Plan[]>(this.plan_url)
    }
    
    getStatusCodes(): Observable<StatusCode[]>{
        return this.http.get<StatusCode[]>(this.statuscodes_url)
    }
}