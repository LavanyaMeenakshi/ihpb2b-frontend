export class Claim {
    public Claim_ID: string;
    public Line_Nbr: string;
    public Subscriber_Id: string;
    public Member_Id: string;
    public Group_Id: string;
    public Subgroup_ID: string;
    public Provider_Id: string;
    public Plan_ID: string;
    public Claim_Begin_DOS: string;
    public Claim_End_DOS: string;
    public Admission_Date: string;
    public Discharge_Date: string;
    public Diagnosis_Code_1: string;
    public Procedure_Code_1: string;
    public LOINC_Code: string;
    public Modifier_Code_1: string;
    public Revenue_Code: string;
    public Paid_Status: string;
    public Paid_Amt: string;
    public Claim_Received_Date: string;
    public Claim_Paid_Date: string;
    public flag: string;

    constructor(Claim_ID: string, Line_Nbr: string, Subscriber_Id: string, Member_Id: string, Group_Id: string,
        Subgroup_ID: string, Provider_Id: string, Plan_ID: string, Claim_Begin_DOS: string, Claim_End_DOS: string,
        Admission_Date: string, Discharge_Date: string, Diagnosis_Code_1: string, Procedure_Code_1: string,
        LOINC_Code: string, Modifier_Code_1: string, Revenue_Code: string, Paid_Status: string, Paid_Amt: string,
        Claim_Received_Date: string, Claim_Paid_Date: string, flag: string){

        this.Claim_ID = Claim_ID;
        this.Line_Nbr = Line_Nbr;
        this.Subscriber_Id = Subscriber_Id;
        this.Member_Id = Member_Id;
        this.Group_Id = Group_Id;
        this.Subgroup_ID = Subgroup_ID;
        this.Provider_Id = Provider_Id;
        this.Plan_ID = Plan_ID;
        this.Claim_Begin_DOS = Claim_Begin_DOS;
        this.Claim_End_DOS = Claim_End_DOS;
        this.Admission_Date = Admission_Date;
        this.Discharge_Date = Discharge_Date;
        this.Diagnosis_Code_1 = Diagnosis_Code_1;
        this.Procedure_Code_1 = Procedure_Code_1;
        this.LOINC_Code = LOINC_Code;
        this.Modifier_Code_1 = Modifier_Code_1;
        this.Revenue_Code = Revenue_Code;
        this.Paid_Status = Paid_Status;
        this.Paid_Amt = Paid_Amt;
        this.Claim_Received_Date = Claim_Received_Date;
        this.Claim_Paid_Date = Claim_Paid_Date;
        this.flag = flag;
    }
}