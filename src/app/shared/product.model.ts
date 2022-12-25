export class product {
    public no: number;
    public name: string;
    public price: string;
    public category: string;
    public imagePath: string;
    constructor(no: number, name: string, price: string, imagePath: string, category: string) {
        this.no = no;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imagePath = imagePath;
    }
}