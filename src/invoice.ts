export type Invoice = {
    id: number;
    value: String;
    customer_id: number;
    status:"peding" | "paid";
    created_at: string;
};

export type CreateInvoice = Omit<Invoice, 'id' | 'status'>;
export type UpdateInvoice = Partial<Omit<Invoice, 'id'>>;

console.log(new Date());