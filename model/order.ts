import moment from "moment";

export interface IOrder{
    id: string,
    items: string[],
    totalAmount: number,
    date: Date
}

class Order implements IOrder{
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

    get readableDate() {
        return moment(this.date).format("MMMM Do YYYY, hh:mm");
    }
}

export default Order;