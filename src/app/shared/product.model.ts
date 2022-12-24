export class product {
    public name: string;
    public price: string;
    public category: string;
    public imagePath: string;
    constructor(name: string, price: string, imagePath: string, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.imagePath = imagePath;
    }
}