import { customers } from '../mocks/customer.mock.ts';
import type { CreateCustomer, Customer, UpdateCustomer } from '../types.ts';

export function findAllCustomers() {
    return customers;
}

export function findCustomersById(id: number) {
    const customer = customers.find((c) => c.id === id);

    if (!customer) throw new Error('Cliente não encontrado.');

    return customer;
}

export function insertCustomer({name, email}: CreateCustomer) {
    const customer: Customer = {
        id: customers[customers.length - 1].id +1,
        name: name,
        email: email,
        status: true
    };

    customers.push(customer);

    return customer;
}

export function modifyCustomer(id: number,
     {name, email, status}: UpdateCustomer    
) {
    const customer = customers.find((c) => c.id === id);

    if (!customer) throw new Error('Cliente não encontrado.');

    if (name) customer.name = name;
    if (email) customer.email = email;
    if (status !== undefined) customer.status = status;

    return customer;
}

export function removeCustomer(id: number): void {
    const index = customers.findIndex((c) => c.id === id);

    if (index === -1) throw new Error('Cliente não encontrado.');

    customers.splice(index, 1);
}