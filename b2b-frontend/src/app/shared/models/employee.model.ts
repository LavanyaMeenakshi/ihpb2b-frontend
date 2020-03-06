export class Employee {
    public Member_ID: string;
    public "Member First Name": string;
    public "Member Last Name": string;
    public Gender: string;
    public Age: string;
    public Opted_Plan: string;
    public Member_Street_Address: string;
    public Member_City: string;
    public Member_Zip: number;
    public Member_State: string;
    public Member_County: string;
    public Enrollment_File_Status: string;
    public New_Employee: string;

    constructor(Member_ID: string, Member_First_Name: string, Member_Last_Name: string,
        Gender: string, Age: string, Opted_Plan: string, Member_Street_Address: string,
        Member_City: string, Member_Zip: number,Member_State: string, Member_County: string,
        Enrollment_File_Status: string, New_Employee: string){

        this.Member_ID = Member_ID;
        this["Member_First_Name"] = Member_First_Name;
        this["Member Last Name"] = Member_First_Name;
        this.Gender = Gender;
        this.Age = Age;
        this.Opted_Plan = Opted_Plan;
        this.Member_Street_Address = Member_Street_Address;
        this.Member_City = Member_City;
        this.Member_Zip = Member_Zip;
        this.Member_State = Member_State;
        this.Member_County = Member_County;
        this.Enrollment_File_Status = Enrollment_File_Status;
        this.New_Employee = New_Employee;
    }
}