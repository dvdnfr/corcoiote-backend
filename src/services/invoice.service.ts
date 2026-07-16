import { invoices } from '../mocks/invoice.mock.ts';
import type { CreateInvoice, Invoice, UpdateInvoice } from '../invoice.ts';

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById(id: number) {
    const invoice = invoices.find((i) => i.id === id);

    if (!invoice) throw new Error('Fatura não encontrada.');

    return invoice;
}

export function insertInvoice({ value, customer_id, created_at }: CreateInvoice) {
    const invoice: Invoice = {
        id: invoices[invoices.length - 1].id + 1,
        value: value,
        customer_id: customer_id,
        created_at: created_at,
        status: 'peding'
    };

    invoices.push(invoice);

    return invoice;
}

export function modifyInvoice(id: number,
    { value, customer_id, status, created_at }: UpdateInvoice
) {
    const invoice = invoices.find((i) => i.id === id);

    if (!invoice) throw new Error('Fatura não encontrada.');

    if (value !== undefined) invoice.value = value;
    if (customer_id !== undefined) invoice.customer_id = customer_id;
    if (status) invoice.status = status;
    if (created_at) invoice.created_at = created_at;

    return invoice;
}

export function removeInvoice(id: number): void {
    const index = invoices.findIndex((i) => i.id === id);

    if (index === -1) throw new Error('Fatura não encontrada.');

    invoices.splice(index, 1);
}