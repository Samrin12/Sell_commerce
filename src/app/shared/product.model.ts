export class product {
    public id?: number;
    public name?: string;
    public price?: string;
    public category?: string;
    public shortCode?: string;
    public description?: string;
    public image?: string;
    public countInStock?: number;
    public isBest?: string;
    public dateCreated?: string;
    public origin?: string;
    constructor(id: number, name: string, price: string, image: string, category: string, shortCode: string, description: string, countInStock: number, isBest: string, dateCreated: string, origin: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
        this.shortCode = shortCode;
        this.description = description;
        this.countInStock = countInStock;
        this.isBest = isBest;
        this.dateCreated = dateCreated;
        this.origin = origin
    }
}
