class Order{
    id: string;
    items: string[];
    totalAmount: number;
    date: Date;


    constructor(id: string, items: string[], totalAmount: number, date: Date) {
        this.id = id;
        this.items = items,
        this.totalAmount = totalAmount,
        this.date = date
    }
}

export default Order;