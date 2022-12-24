export class product {
    public name: string;
    public price: string;
    public imagePath: string;
    constructor(name: string, price: string, imagePath: string) {
        this.name = name;
        this.price = price;
        this.imagePath = imagePath;
    }
}