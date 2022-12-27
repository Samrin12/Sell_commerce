export class product {
    public no?: number;
    public name?: string;
    public price?: string;
    public category?: string;
    public psc?: string;
    public desc?: string;
    public imagePath?: string;
    public countInStock?: number;
    public isBest?: string;
    public dateCreated?: string;
    public origin?: string;
    constructor(no: number, name: string, price: string, imagePath: string, category: string, psc: string, desc: string, countInStock: number, isBest: string, dateCreated: string, origin: string) {
        this.no = no;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imagePath = imagePath;
        this.psc = psc;
        this.desc = desc;
        this.countInStock = countInStock;
        this.isBest = isBest;
        this.dateCreated = dateCreated;
        this.origin = origin
    }
}
