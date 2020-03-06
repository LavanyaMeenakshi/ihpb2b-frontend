export class CountyType {
    public County_Type: string;
    public Population_Minimum: string;
    public Density_Minimum: string;

    constructor(County_Type: string, Population_Minimum: string, Density_Minimum: string){
            this.County_Type = County_Type;
            this.Population_Minimum = Population_Minimum;
            this.Density_Minimum = Density_Minimum;
    }
}