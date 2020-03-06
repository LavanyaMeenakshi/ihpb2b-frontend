export class Provider {
    public Last_Name: string;
    public First_Name: string;
    public National_Provider_Identifier_Number: string;
    public Specialty: string;
    public Provider_Specialty_Type_Code: string;
    public Provider_Street_Address: string;
    public Provider_City: string;
    public Provider_State_Code: string;
    public Provider_Zip_Code: string;
    public If_PCP_Accepts_New_Patients: string;
    public County: string

    constructor(Last_Name: string, First_Name: string, National_Provider_Identifier_Number: string, 
        Specialty: string, Provider_Specialty_Type_Code: string, Provider_Street_Address: string,
        Provider_City: string, Provider_State_Code: string, Provider_Zip_Code: string, 
        If_PCP_Accepts_New_Patients: string, County: string){

            this.Last_Name = Last_Name;
            this.First_Name = First_Name;
            this.National_Provider_Identifier_Number = National_Provider_Identifier_Number;
            this.Specialty = Specialty;
            this.Provider_Specialty_Type_Code = Provider_Specialty_Type_Code;
            this.Provider_Street_Address = Provider_Street_Address;
            this.Provider_City = Provider_City;
            this.Provider_State_Code = Provider_State_Code;
            this.Provider_Zip_Code = Provider_Zip_Code;
            this.If_PCP_Accepts_New_Patients = If_PCP_Accepts_New_Patients;
            this.County = County;
    }
}