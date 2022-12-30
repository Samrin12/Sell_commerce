export class Cart {
    Items?: CartItem[];
}
export class CartItem {
    productId?: any;
    quantity?: number;
}

export class CartItemsDetailed {
    product?: any;
    quantity?: number;
}