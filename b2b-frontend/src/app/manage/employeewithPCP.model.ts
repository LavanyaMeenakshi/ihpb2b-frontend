export class EmployeeWithPCP {
    public Member_ID: string;
    public Member_First_Name: string;
    public Member_Last_Name: string;
    public Gender: string;
    public Age: string;
    public Opted_Plan: string;
    public Member_Street_Address: string;
    public Member_City: string;
    public Member_Zip: number;
    public Member_State: string;
    public Member_County: string;
    public "PCP Last Name": string;
    public "PCP First Name": string;
    public National_Provider_Identifier: number;
    public Specialty: string;
    public Provider_Specialty_Type_Cod: number;
    public Provider_Street_Address: string;
    public Provider_City: string;
    public Provider_State_Code: string;
    public Provider_Zip_Code: number;
    public Provider_County: string;

    constructor(Member_ID: string, Member_First_Name: string, Member_Last_Name: string,
        Gender: string, Age: string, Opted_Plan: string, Member_Street_Address: string,
        Member_City: string, Member_Zip: number,Member_State: string, Member_County: string,
        PCP_Last_Name: string, PCP_First_Name: string, National_Provider_Identifier: number,
        Specialty: string, Provider_Specialty_Type_Cod: number, Provider_Street_Address: string,
        Provider_City: string, Provider_State_Code: string, Provider_Zip_Code: number,
        Provider_County: string){

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
        this["PCP Last Name"] = PCP_Last_Name;
        this["PCP First Name"] = PCP_First_Name;
        this.National_Provider_Identifier = National_Provider_Identifier;
        this.Specialty = Specialty;
        this.Provider_Specialty_Type_Cod = Provider_Specialty_Type_Cod;
        this.Provider_Street_Address = Provider_Street_Address;
        this.Provider_City = Provider_City;
        this.Provider_State_Code = Provider_State_Code;
        this.Provider_Zip_Code = Provider_Zip_Code;
        this.Provider_County = Provider_County;
    }
}