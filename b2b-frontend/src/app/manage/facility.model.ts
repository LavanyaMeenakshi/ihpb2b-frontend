export class Facility {
    public Facility_Name: string;
    public National_Provider_Identifier_Number: string;
    public Specialty: string;
    public Facility_Specialty_Type_Code: string;
    public Provider_Street_Address: string;
    public Provider_City: string;
    public Provider_State_Code: string;
    public Provider_Zip_Code: string;

    constructor(Facility_Name: string, National_Provider_Identifier_Number: string, Specialty: string,
        Facility_Specialty_Type_Code: string, Provider_Street_Address: string, Provider_City: string, 
        Provider_State_Code: string, Provider_Zip_Code: string){

        this.Facility_Name = Facility_Name;
        this.National_Provider_Identifier_Number = National_Provider_Identifier_Number;
        this.Specialty = Specialty;
        this.Facility_Specialty_Type_Code = Facility_Specialty_Type_Code;
        this.Provider_Street_Address = Provider_Street_Address;
        this.Provider_City = Provider_City;
        this.Provider_State_Code = Provider_State_Code;
        this.Provider_Zip_Code = Provider_Zip_Code;
    }
}