export class Plan{
    public Plan_ID: string;
    public Plan_Name: string;
    public Control_Number: string;
    public Suffix: string;
    public Account_Number: string;
    public Plan_Summary_Code: string;
    public Plan_Effective_Dt: string;
    public Plan_Expiry_Date: string;
    public Plan_Status_Code: string;
    public Product_Identifier: string;
    public Network_ID: string;
    public Monthly_Premium: string;
    public Deductibles: string;
    public Copay: string;
    public Coinsurance: string;
    public Out_of_pocket_max: string;

    constructor(Plan_ID: string, Plan_Name: string, Control_Number: string, Suffix: string, Account_Number: string, 
        Plan_Summary_Code: string, Plan_Effective_Dt: string, Plan_Expiry_Date: string, Plan_Status_Code: string,
        Product_Identifier: string, Network_ID: string, Monthly_Premium: string, Deductibles: string, 
        Copay: string, Coinsurance: string, Out_of_pocket_max: string){

            this.Plan_ID = Plan_ID;
            this.Plan_Name = Plan_Name;
            this.Control_Number = Control_Number;
            this.Suffix = Suffix;
            this.Account_Number = Account_Number; 
            this.Plan_Summary_Code = Plan_Summary_Code;
            this.Plan_Effective_Dt = Plan_Effective_Dt;
            this.Plan_Expiry_Date = Plan_Expiry_Date;
            this.Plan_Status_Code = Plan_Status_Code;
            this.Product_Identifier = Product_Identifier;
            this.Network_ID = Network_ID;
            this.Monthly_Premium = Monthly_Premium;
            this.Deductibles = Deductibles;
            this.Copay = Copay;
            this.Coinsurance = Coinsurance;
            this.Out_of_pocket_max = Out_of_pocket_max;
    }
}