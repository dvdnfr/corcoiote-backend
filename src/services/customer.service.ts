import { customers } from '../mocks/customer.mock';
import { CreateCustomer, Customer, UpdateCustomer} from '../types';

function findAllCustomers() {
    return customers;
}

function findCustomersById(id: number) {
    const customer = customers.find((c) => c.id === id);

    if (!customer) throw new Error('Cliente não encontrado.');

    return customer;
}

function insertCustomer({name, email}: CreateCustomer) {
    const customer: Customer = {
        id: customers[customers.length - 1].id +1,
        name: name,
        email: email,
        status: true
    };

    customers.push(customer);

    return customer;
}

function modifyCustomer(id: number,
     {name, email, status}: UpdateCustomer    
) {
    const customer = customers.find((c) => c.id === id);

    if (!customer) throw new Error('Cliente não encontrado.');

    if (name) customer.name = name;
    if (email) customer.email = email;
    if (status !== undefined) customer.status = status;

    return customer;
}

function removeCustomer(id: number): void {
    const index = customers.findIndex((c) => c.id === id);

    if (index === -1) throw new Error('Cliente não encontrado.');

    customers.splice(index, 1);
}