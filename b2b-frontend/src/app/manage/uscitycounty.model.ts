export class USCityCounty {
    public City_Name: string;
    public Zip: string;
    public State: string;
    public County_Name: string;

    constructor(City_Name: string, Zip: string, State: string, County_Name: string){

            this.City_Name = City_Name;
            this.Zip = Zip;
            this.State = State;
            this.County_Name = County_Name
    }
}