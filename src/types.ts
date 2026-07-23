export type Customer = {
    id: number;
    name: string;
    email: string;
    status: boolean;
};

export type Invoice = {
    id: number;
    customerId: number;
    amount: number;
    dueDate: string;
    status: string;
};

export type CreateInvoice = {
    customerId: number;
    amount: number;
    dueDate: string;
};

export type UpdateInvoice = {
    amount?: number;
    dueDate?: string;
    status?: string;
};

