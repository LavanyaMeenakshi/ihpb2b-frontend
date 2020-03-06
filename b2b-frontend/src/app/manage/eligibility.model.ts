export class Eligibility {
    public Member_ID: string;
    public Member_First_Name: string;
    public Member_Last_Name: string;
    public Gender: string;
    public Age: string;
    public Opted_Plan: string;
    public Member_Street_Address: string;
    public Member_City: string;
    public Member_Zip: string;
    public Member_State: string;
    public Member_County: string;
    public Plan_Summary_Code: string;
    public Plan_Effective_Dt: string;
    public Plan_Expiry_Date: string;
    public Monthly_Premium: string;
    public Deductibles: string;
    public Copay: string;
    public Coinsurance: string;
    public Out_of_pocket_max: string;

    constructor(Member_ID: string, Member_First_Name: string, Member_Last_Name: string, Gender: string,
        Age: string, Opted_Plan: string, Member_Street_Address: string, Member_City: string,
        Member_Zip: string, Member_State: string, Member_County: string, Plan_Summary_Code: string,
        Plan_Effective_Dt: string, Plan_Expiry_Date: string, Monthly_Premium: string, 
        Deductibles: string, Copay: string, Coinsurance: string, Out_of_pocket_max: string){

        this.Member_ID = Member_ID;
        this.Member_First_Name = Member_First_Name;
        this.Member_Last_Name = Member_Last_Name;
        this.Gender = Gender;
        this.Age = Age;
        this.Opted_Plan = Opted_Plan;
        this.Member_Street_Address = Member_Street_Address;
        this.Member_City = Member_City;
        this.Member_Zip = Member_Zip;
        this.Member_State = Member_State;
        this.Member_County = Member_County;
        this.Plan_Summary_Code = Plan_Summary_Code;
        this.Plan_Effective_Dt = Plan_Effective_Dt;
        this.Plan_Expiry_Date = Plan_Expiry_Date;
        this.Monthly_Premium = Monthly_Premium;
        this.Deductibles = Deductibles;
        this.Copay = Copay;
        this.Coinsurance = Coinsurance;
        this.Out_of_pocket_max = Out_of_pocket_max;
    }
}